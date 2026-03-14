import { afterAll, beforeAll, describe, expect, test } from 'bun:test'
import { type Subprocess } from 'bun'

const PORT = 4103
const BASE_URL = `http://localhost:${PORT}`

/** Representative routes covering key sections of the site */
const key_routes = [
	'/',
	'/about',
	'/partners',
	'/tags',
	'/concierge-medicine',
	'/plans',
	'/articles',
]

let server_proc: Subprocess

beforeAll(async () => {
	server_proc = Bun.spawn(
		['bun', './start.ts'],
		{
			cwd: import.meta.dir + '/..',
			env: { ...process.env, NODE_ENV: 'production' },
			stdout: 'pipe',
			stderr: 'pipe',
		},
	)
	// Wait for server to be ready (poll with backoff)
	const max_attempts = 30
	for (let i = 0; i < max_attempts; i++) {
		try {
			const res = await fetch(BASE_URL)
			if (res.ok) break
		} catch {
			// Server not ready yet
		}
		await Bun.sleep(500)
	}
})

afterAll(() => {
	server_proc?.kill()
})

describe('peakexistence-site routes', () => {
	for (const route of key_routes) {
		test(`GET ${route} returns 200`, async () => {
			const res = await fetch(`${BASE_URL}${route}`)
			expect(res.status).toBe(200)
		})
	}

	test('GET / contains expected HTML elements', async () => {
		const res = await fetch(BASE_URL)
		const html = await res.text()
		expect(html).toContain('<!DOCTYPE html>')
		expect(html).toContain('Peak Existence')
		expect(html).toContain('<title>')
	})

	test('GET /about contains page content', async () => {
		const res = await fetch(`${BASE_URL}/about`)
		const html = await res.text()
		expect(html).toContain('<!DOCTYPE html>')
		expect(html).toContain('Dr. Manny Emenike')
	})

	test('GET /robots.txt returns valid robots file', async () => {
		const res = await fetch(`${BASE_URL}/robots.txt`)
		expect(res.status).toBe(200)
		const text = await res.text()
		expect(text).toContain('User-agent')
		expect(text).toContain('Sitemap')
	})

	test('GET /nonexistent returns 404', async () => {
		const res = await fetch(`${BASE_URL}/nonexistent-page-that-does-not-exist`)
		expect(res.status).toBe(404)
	})

	test('HTML responses have correct content-type', async () => {
		const res = await fetch(BASE_URL)
		const content_type = res.headers.get('content-type')
		expect(content_type).toContain('text/html')
	})
})
