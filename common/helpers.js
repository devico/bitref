const axios = require('axios')
import qs from 'qs'

export const addLinkData = (url) => {
  return axios('/api/addlink', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    data: JSON.stringify({'url': url})
  })
}

export const getLinks = () => {
  return axios.get('/api/links')
    .then(res => res.data)
    .catch(error => error)
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
    }).join('-')
}

export const generateShortUrl = () => {
  return generateLinkHash()
}
