export type ProductLine = 'industrial' | 'domestica' | 'accesorios'

export interface ProductSpec {
  label: string
  value: string
}

export interface CatalogProduct {
  slug: string
  name: string
  image: string
  gallery?: string[]
  description?: string
  availability?: string
  features?: string[]
  specs?: ProductSpec[]
}

export interface CatalogCategory {
  slug: string
  line: ProductLine
  name: string
  sourceUrl: string
  description?: string
  benefits?: string[]
  products: CatalogProduct[]
}
