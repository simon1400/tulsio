const formatDatePublic = (date) => {
  var datePub = date.split('T')[0]
  datePub = datePub.split('-').reverse().join('.')
  return datePub
}

export default formatDatePublic
