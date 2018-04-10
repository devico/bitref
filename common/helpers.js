const axios = require('axios')

export const getTitle = (url) => {
  const title = axios.get(url)
    .then(res => res.data.match(/<title[^>]*>([^<]+)<\/title>/)[1])
    .catch(error => {
      console.error(error)
    })
  return title
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
	return `https://bit.ref/${generateLinkHash()}`
}