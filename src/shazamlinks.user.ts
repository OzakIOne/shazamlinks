// ==UserScript==
// @name        shazamlinks
// @namespace   Violentmonkey Scripts
// @match       https://www.shazam.com/*
// @grant       none
// @version     2.2
// @author      ozaki
// @description 17/06/2023 01:19:37
// @homepageURL https://github.com/OzakIOne/shazamlinks/
// @updateURL   https://github.com/OzakIOne/shazamlinks/blob/master/src/shazamlinks.user.js
// ==/UserScript==

function run() {
  const title = document.querySelector('h1.title') as HTMLHeadingElement;
  const artist = document.querySelector('h2.artist') as HTMLHeadingElement;

  function createElement(text: string, url: string, color: string) {
    const element = document.createElement('div');
    const classNames = ['action', 'flex-reset', 'btn', 'share', 'popup-btn', 'popup-inline'];

    element.classList.add(...classNames);
    element.innerText = text;
    element.style.backgroundColor = color;

    element.addEventListener('click', () => window.open(url, '_blank'));

    return element;
  }

  const youtube = createElement(
    'Youtube',
    `https://www.youtube.com/results?search_query=${title?.innerText}+${artist?.innerText}`,
    '#FF0000'
  );
  const spotify = createElement(
    'Spotify',
    `https://open.spotify.com/search/${title?.innerText} ${artist?.innerText}`,
    '#1DB954'
  );
  const deezer = createElement(
    'Deezer',
    `https://www.deezer.com/search/${title?.innerText} ${artist?.innerText}`,
    '#00C7F2'
  );
  const soundcloud = createElement(
    'SoundCloud',
    `https://soundcloud.com/search?q=${title?.innerText} ${artist?.innerText}`,
    '#FF5500'
  );

  const container = document?.querySelector(
    '.flex-reset.btn.share.popup-btn.popup-inline'
  )?.parentNode;
  container?.appendChild(youtube);
  container?.appendChild(spotify);
  container?.appendChild(deezer);
  container?.appendChild(soundcloud);

  clearInterval(interval);
}

const interval = setInterval(() => {
  if (document.querySelector('h1.title')) run();
}, 50);
