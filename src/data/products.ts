import { accessoryCategories } from './accessoryProducts'
import { domesticCategories } from './domesticProducts'
import { industrialCategories } from './industrialProducts'
import type { CatalogCategory, ProductLine } from './productTypes'

export type { CatalogCategory, CatalogProduct, ProductLine } from './productTypes'

export const productCategories: CatalogCategory[] = [
  ...industrialCategories,
  ...domesticCategories,
  ...accessoryCategories,
]

export const productLines: Array<{ id: ProductLine; name: string; description: string }> = [
  {
    id: 'industrial',
    name: 'Línea Industrial',
    description: 'Sistemas, equipos y componentes para tratamiento de agua y aire a escala industrial.',
  },
  {
    id: 'domestica',
    name: 'Línea Doméstica',
    description: 'Soluciones compactas para agua purificada y aire limpio en hogares, oficinas y comercios.',
  },
  {
    id: 'accesorios',
    name: 'Accesorios y Repuestos',
    description: 'Consumibles, conexiones y repuestos para mantener cada sistema en operación.',
  },
]

export const findCategory = (categorySlug: string) =>
  productCategories.find((category) => category.slug === categorySlug)

export const findProduct = (categorySlug: string, productSlug: string) => {
  const category = findCategory(categorySlug)
  const product = category?.products.find((item) => item.slug === productSlug)
  return category && product ? { category, product } : undefined
}
