import template from '../templates/work.hbs';

const apiPath = 'https://api.artic.edu/api/v1/artworks';

const insRef = document.querySelector('.main');
console.log(insRef);

fetch(apiPath)
  .then(res => res.json())
  .then(res => {
    console.log(res.data);
    res.data.map(elem => {
      console.log(template({ elem }));
      insRef.insertAdjacentHTML('beforeend', template({ elem }));
    });
  })

  .catch(err => console.log(err));
