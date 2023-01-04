(function() {
  const API_URL = 'https://api.adviceslip.com/advice';
  const API = {
    get: (url) => {
      return fetch(url).then(response => response.json())
    }
  };

  function getQuotes() {
    API.get(API_URL).then(data => document.querySelector('.advice-quote').textContent = `'${(data['slip']['advice'])}'`);
    API.get(API_URL).then(data => document.querySelector('.advice-id').textContent = `advice #${(data['slip']['id'])}`);
  }

  document.querySelector('.get-advice').addEventListener('click', getQuotes);
})();