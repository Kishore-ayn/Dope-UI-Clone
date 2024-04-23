import {templates} from './templates.js'


let templatesHTML = '';
templates.forEach((template) => {
  templatesHTML +=
  `
  <div class="template-container">
    <div class="template-upper-portion">
      <img class="figma-logo" src="logos/figma.svg">
      <img class="eye-logo eye-logo-margin js-eye-logo" src="logos/eye.svg" data-product-id = "${template.id}" data-url = "${template.url}">
      <button class="price-button">
        ${template.price}
      </button>
    </div>
    <div class="text">
      ${template.title}
    </div>
    <div>
      <img class="template-image" src="${template.image}">
    </div>
  </div>
  `
})

document.querySelector('.js-row-template-containers').innerHTML = templatesHTML



const wolButton = document.querySelector('.js-wol-button')
wolButton.addEventListener('click', () => {
  window.open('https://fuelerworkspace.notion.site/DopeUI-Wall-of-Love-cda9f0aa2588438ca4c2173ff6f5a10e', '_blank');
});


const feauturedButton = document.querySelector('.js-feautured');
feauturedButton.addEventListener('click', () => {
  window.open('https://www.producthunt.com/products/dopeui?utm_source=badge-featured&utm_medium=badge#dopeui','_blank');
});

const eyeElement = document.querySelectorAll('.js-eye-logo');

eyeElement.forEach((eye) => {
  const eyeURL = eye.dataset.url;
  eye.addEventListener('click', () => {
    window.open(eyeURL, '_blank');
  });
});

