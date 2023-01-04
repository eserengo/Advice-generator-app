(function() {
  const API_URL = 'https://api.adviceslip.com/advice';
  const API = {
    get: (url) => { return fetch(url).then(response => response.json()) },
  };

  async function getQuotes() {
    await API.get(API_URL)
      .then(data => {
        document.querySelector('.advice-quote').textContent = `'${(data['slip']['advice'])}'`;
        document.querySelector('.advice-id').textContent = `advice #${(data['slip']['id'])}`;
        idClass("success", "error");
      })
      .catch(error => {
        document.querySelector('.advice-quote').textContent = `${error.message}!`;
        document.querySelector('.advice-id').textContent = `${error.name}:`;
        idClass("error", "success");
      })
  }

  function idClass(rule, exception) {
    document.querySelector('.advice-id').classList.contains(exception) ?
      (document.querySelector('.advice-id').classList.remove(exception),
      document.querySelector('.advice-id').classList.add(rule)) :
      document.querySelector('.advice-id').classList.add(rule) ?
        null :
        document.querySelector('.advice-id').classList.add(rule);
  }

  document.querySelector('.get-advice').addEventListener('click', getQuotes);
})();