// ==UserScript==
// @name        shazamlinks
// @namespace   Violentmonkey Scripts
// @match       https://www.shazam.com/*
// @grant       none
// @version     2.0
// @author      ozaki
// @description 17/06/2023 01:19:37
// @homepageURL https://github.com/OzakIOne/shazamlinks/
// @updateURL   https://github.com/OzakIOne/shazamlinks/blob/master/shazamlinks.user.js
// ==/UserScript==

function run() {
  console.log('run');
  const title = document.querySelector('h1.title');
  const artist = document.querySelector('h2.artist');

  function createElement(text, url) {
    const element = document.createElement('div');
    const classNames = [
      'action',
      'flex-reset',
      'btn',
      'share',
      'popup-btn',
      'popup-inline',
    ];

    classNames.forEach((e) => element.classList.add(e));

    element.innerText = text;

    if (text === 'Youtube') element.style.backgroundColor = '#FF0000';
    else if (text === 'Spotify') element.style.backgroundColor = '#1DB954';
    else if (text === 'Deezer') element.style.backgroundColor = '#00C7F2';

    element.addEventListener('click', () => window.open(url, '_blank'));

    return element;
  }

  const youtube = createElement(
    'Youtube',
    `https://www.youtube.com/results?search_query=${title.innerText}+${artist.innerText}`,
  );
  const spotify = createElement(
    'Spotify',
    `https://open.spotify.com/search/${title.innerText} ${artist.innerText}`,
  );
  const deezer = createElement(
    'Deezer',
    `https://www.deezer.com/search/${title.innerText} ${artist.innerText}`,
  );

  const container = document.querySelector(
    '.flex-reset.btn.share.popup-btn.popup-inline',
  ).parentNode;
  container.appendChild(youtube);
  container.appendChild(spotify);
  container.appendChild(deezer);

  clearInterval(interval);
}

const interval = setInterval(() => {
  if (document.querySelector('h1.title')) run();
}, 50);
