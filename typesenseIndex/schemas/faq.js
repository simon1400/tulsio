module.exports = {
  name: "faq",
  num_documents: 0,
  fields: [
    {
      name: "question",
      type: "string",
      facet: true,
    },
    {
      name: "answer",
      type: "string",
      facet: false,
    },
  ]
}