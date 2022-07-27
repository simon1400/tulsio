module.exports = {
  name: "dictionaries",
  num_documents: 0,
  fields: [
    {
      name: "title",
      type: "string",
      facet: false,
    },
    {
      name: "content",
      type: "string",
      facet: false,
    },
    {
      name: "image",
      type: "string",
      facet: false,
      optional: true
    },
    {
      name: "alternativeText",
      type: "string",
      facet: false,
      optional: true
    },
    {
      name: "textLink",
      type: "string",
      facet: false,
      optional: true
    },
    {
      name: "link",
      type: "string",
      facet: false,
      optional: true
    },
  ]
}