const allQuotes = () => {
  return fetch('https://api.themotivate365.com/stoic-quote')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch stoic quote');
      }
      return response.json();
    })
    .catch(error => {
      throw new Error(`Error: ${error.message}`);
    })
}

export default allQuotes