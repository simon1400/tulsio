export interface ImageAttr {
  url: string,
  alternativeText?: string
  name?: string
}

export default interface IImage {
  attributes: ImageAttr
}