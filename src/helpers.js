import axios from 'axios'

export const getTitle = url => {
  const title = axios.get(url)
    .then(res => res.data.match(/<title[^>]*>([^<]+)<\/title>/)[1])
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(error)
    })
  return title
}
