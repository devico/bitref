import axios from 'axios'

export const getUrl = url => {
  axios.get(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
  .catch((error) => {
    alert('Не удалось загрузить  ссылку')
    console.error(error)
  })
}
