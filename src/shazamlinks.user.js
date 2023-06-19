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
const interval = setInterval(()=>{
    document.querySelector('h1.title') && function() {
        let title = document.querySelector('h1.title'), artist = document.querySelector('h2.artist');
        function createElement(text, url, color) {
            let element = document.createElement('div');
            return element.classList.add(...[
                'action',
                'flex-reset',
                'btn',
                'share',
                'popup-btn',
                'popup-inline'
            ]), element.innerText = text, element.style.backgroundColor = color, element.addEventListener('click', ()=>window.open(url, '_blank')), element;
        }
        let youtube = createElement('Youtube', `https://www.youtube.com/results?search_query=${title?.innerText}+${artist?.innerText}`, '#FF0000'), spotify = createElement('Spotify', `https://open.spotify.com/search/${title?.innerText} ${artist?.innerText}`, '#1DB954'), deezer = createElement('Deezer', `https://www.deezer.com/search/${title?.innerText} ${artist?.innerText}`, '#00C7F2'), soundcloud = createElement('SoundCloud', `https://soundcloud.com/search?q=${title?.innerText} ${artist?.innerText}`, '#FF5500'), container = document?.querySelector('.flex-reset.btn.share.popup-btn.popup-inline')?.parentNode;
        container?.appendChild(youtube), container?.appendChild(spotify), container?.appendChild(deezer), container?.appendChild(soundcloud), clearInterval(interval);
    }();
}, 50);
