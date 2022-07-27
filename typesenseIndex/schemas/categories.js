module.exports = {
  name: "categories",
  num_documents: 0,
  fields: [
    {
      name: "title",
      type: "string",
      facet: false,
    },
    {
      name: "slug",
      type: "string",
      facet: false,
    },
    {
      name: "image",
      type: "string",
      facet: false,
      optional: true,
    },
    {
      name: "alternativeText",
      type: "string",
      facet: false,
      optional: true,
    },
  ]
}