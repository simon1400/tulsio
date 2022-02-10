module.exports = {
  name: "articles",
  num_documents: 0,
  fields: [
    {
      name: "title",
      type: "string",
      facet: false,
    },
    {
      name: "perex",
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
      name: "category",
      type: "string[]",
      facet: true,
      optional: true,
    },
    {
      name: "colorLabels",
      type: "string[]",
      facet: true,
      optional: true,
    },
    {
      name: "label",
      type: "string[]",
      facet: true,
      optional: true,
    },
    {
      name: "chapters",
      type: "string[]",
      facet: false,
    },
  ]
}