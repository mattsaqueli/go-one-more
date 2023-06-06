const allQuotes = () => {
  return fetch('https://api.themotivate365.com/stoic-quote')
  .then(response => response.json())
}

export default allQuotes