import fetch from 'fetch'

export const getUrl = url => {
  fetch(url)
    .then(resp => resp.json())
    .then(link => {
    let quote = randomElement(quotes)
    return textQuote.innerHTML = quote.quote + '<br />' + quote.author
    })
.catch((error) => {
    alert('Не удалось загрузить цитату')
  console.error(error)
})
  return arr
}
