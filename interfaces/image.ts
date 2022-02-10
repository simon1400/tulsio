export interface ImageAttr {
  url: string,
  alternativeText?: string
  name?: string
  
}

export interface Attr {
  attributes: ImageAttr
}

export default interface IImage {
  attributes: ImageAttr
  data?: Attr
  indexOf?: () => void 
}