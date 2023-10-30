const container = document.querySelector('.about__video');
const cover = document.querySelector('.about__video').querySelector('.video');
const button = document.querySelector('.about__video').querySelector('.video__button');

const createIframe = () => {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  iframe.setAttribute('title', 'Бесплатные интерактивные онлайн-курсы');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('allowfullscreen', '');
  iframe.classList.add('about__video-player');
  container.append(iframe);
};

const setupVideo = () => {
  if (container && cover && button) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      cover.style.display = 'none';
      button.style.display = 'none';
      createIframe();
    });
  }
};

export {setupVideo};
