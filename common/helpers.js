const axios = require('axios')

export const addLinkData = (url) => axios.post('/api/links', {params: {link: url}})

export const getLinks = () => {
  let links = {}
  axios.get('/api/links')
    .then(res => {
      links = res.data
    })
    .catch(err => err)
  return links
}

export const getOriginalLink = (url) => {
  axios.get(`/api/links/${url}`)
           .then(res => console.log(res.data))
           .catch(err => err)
}

let range = (from, to) => {
  return Array(to).fill(from).map((_, i) => i)
}

let generateLinkHash = () => {
  return range(0, 1)
    .map(() => {
      return Math.random().toString(16).slice(-7)
    }).join('-');
}

export const generateShortUrl = () => {
  return generateLinkHash()
}
