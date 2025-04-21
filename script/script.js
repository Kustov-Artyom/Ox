'use strict'

const header = document.querySelector('header');
const firstBlock = document.getElementById('resources');
const firstBlockHeight = firstBlock.clientHeight - 500;

let scrollStarted = 0;

window.addEventListener('scroll', headerScrollHandler);

function headerScrollHandler () {
    const scrollTop = window.scrollY;

    if (scrollTop >= firstBlockHeight) {
        header.classList.add('header--fixed')
    } else {
        header.classList.remove('header--fixed')
    }

    scrollStarted = scrollTop;
};