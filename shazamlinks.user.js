// ==UserScript==
// @name        shazamlinks
// @namespace   Violentmonkey Scripts
// @match       https://www.shazam.com/*
// @grant       none
// @version     2.1
// @author      ozaki
// @description 17/06/2023 01:19:37
// @homepageURL https://github.com/OzakIOne/shazamlinks/
// @updateURL   https://github.com/OzakIOne/shazamlinks/blob/master/shazamlinks.user.js
// ==/UserScript==
const interval = setInterval(()=>{
    document.querySelector('h1.title') && function() {
        let title = document.querySelector('h1.title'), artist = document.querySelector('h2.artist');
        function createElement(text, url) {
            let element = document.createElement('div');
            return element.classList.add(...[
                'action',
                'flex-reset',
                'btn',
                'share',
                'popup-btn',
                'popup-inline'
            ]), element.innerText = text, 'Youtube' === text ? element.style.backgroundColor = '#FF0000' : 'Spotify' === text ? element.style.backgroundColor = '#1DB954' : 'Deezer' === text && (element.style.backgroundColor = '#00C7F2'), element.addEventListener('click', ()=>window.open(url, '_blank')), element;
        }
        let youtube = createElement('Youtube', `https://www.youtube.com/results?search_query=${title?.innerText}+${artist?.innerText}`), spotify = createElement('Spotify', `https://open.spotify.com/search/${title?.innerText} ${artist?.innerText}`), deezer = createElement('Deezer', `https://www.deezer.com/search/${title?.innerText} ${artist?.innerText}`), container = document?.querySelector('.flex-reset.btn.share.popup-btn.popup-inline')?.parentNode;
        container?.appendChild(youtube), container?.appendChild(spotify), container?.appendChild(deezer), clearInterval(interval);
    }();
}, 50);

