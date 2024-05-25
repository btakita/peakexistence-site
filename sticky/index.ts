import { class_ } from 'ctx-core/html'
export const sticky__breadcrumbs__nav_class = class_('sticky', 'top-[64px]', 'sm:top-[74px]', 'bg-skin-fill', 'z-[49]', 'whitespace-nowrap', '[&>*]:overflow-x-auto', '[&>*]:text-ellipsis')
export const sticky__h2_class = class_('sticky', 'top-[86px]', 'sm:top-[98px]', 'bg-skin-fill', 'z-[48]', 'whitespace-nowrap', '[&>*]:overflow-x-auto', '[&>*]:text-ellipsis')
export const sticky__h3_class = class_('sticky', 'top-[116px]', 'sm:top-[130px]', 'bg-skin-fill', 'z-[47]', 'whitespace-nowrap', '[&>*]:overflow-x-auto', '[&>*]:text-ellipsis')
export const sticky__h4_class = class_('sticky', 'top-[144px]', 'sm:top-[158px]', 'bg-skin-fill', 'z-[46]', 'whitespace-nowrap', '[&>*]:overflow-x-auto', '[&>*]:text-ellipsis')
export const sticky__h5_class = class_('sticky', 'top-[172px]', 'sm:top-[186px]', 'bg-skin-fill', 'z-[45]', 'whitespace-nowrap', '[&>*]:overflow-x-auto', '[&>*]:text-ellipsis')
export const sticky__h6_class = class_('sticky', 'top-[200px]', 'sm:top-[214px]', 'bg-skin-fill', 'z-[44]', 'whitespace-nowrap', '[&>*]:overflow-x-auto', '[&>*]:text-ellipsis')
export const sticky__level_props_a1 = [
	sticky__h2_class,
	sticky__h3_class,
	sticky__h4_class,
	sticky__h5_class,
	sticky__h6_class,
]
export function sticky__dl_tree_props_(dl_tree_level:number) {
  return {
		div_class: 'prose',
		dt_class: class_(sticky__level_props_a1[dl_tree_level], 'mt-2'),
		dd_class: 'prose mb-4',
	}
}
