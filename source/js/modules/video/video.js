const container = document.querySelector('.gym__video');
const button = container.querySelector('.gym__play-button');
const poster = container.querySelector('picture');

function initVideo() {
  if (container && button) {
    button.addEventListener('click', (evt) => {
      evt.preventDefault();
      if (poster) {
        poster.style.display = 'none';
      }
      delete container.dataset.overlay;
      button.style.display = 'none';
      createVideo();
    });
  }
}

function createVideo() {
  const video = document.createElement('iframe');

  video.setAttribute('src', 'https://www.youtube-nocookie.com/embed/9TZXsZItgdw?si=n6SAqUAKVnIufUKI&autoplay=1&modestbranding=1&rel=0&hl=ru&showinfo=0');
  video.setAttribute('title', 'Бесплатные интерактивные онлайн-курсы');
  video.setAttribute('frameborder', '0');
  video.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  video.setAttribute('allowfullscreen', '');
  video.dataset.videoPlayer = 'gym';
  container.append(video);
}

export {initVideo};
