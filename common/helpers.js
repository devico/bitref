const axios = require('axios')

export const getTitle = (url) => {
  axios.get('/getlink', {params: {link: url}})
    .then(res => {
      return res.data
    })
    .then(data => {
      return data
    })
    .catch(error => {
      console.error(error)
    })
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
	return `http://bit.ref/${generateLinkHash()}`
}