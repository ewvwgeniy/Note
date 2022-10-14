export const getTagsFromText = (text) => {
  if (!text.includes("#")) {
    return []
  }
  const tags = text.split('#').map(el => el.split(' ')[0]).filter(el => !!el)
  if (text[0] !== "#") {
    tags.shift()
  }
  return [...new Set(tags)]
}

export const getFilteredNotes = (notes, filterTags) => {
  if (!filterTags.length) {
    return [...notes]
  }
  return notes.filter(note => {
    let flag = false
    filterTags.forEach(tag => {
      if (note.tags.includes(tag)) {
        flag = true
      }
    })
    return flag
  })
}