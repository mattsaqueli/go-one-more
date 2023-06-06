const allQuotes = () => {
  return fetch('https://api.goprogram.ai/inspiration')
  .then(response => response.json())
}

export default allQuotes