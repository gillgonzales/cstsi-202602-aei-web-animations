import Swiper from 'swiper';
import { Autoplay, EffectCube, Zoom, Keyboard } from 'swiper/modules'
import 'swiper/css';

// import 'swiper/css/bundle';
import 'swiper/css/effect-cube';


const swiper = new Swiper('.slider1', {
    direction: 'horizontal',
    modules: [Autoplay, Zoom],
    autoplay: {
        delay: 1000,
    },
    loop: true,
    zoom: {
        maxRatio: 5,
        panOnMouseMove: true
    }
});

const swiper2 = new Swiper('.slider2', {
    modules: [
        EffectCube,
        Keyboard,
        Autoplay
    ],
    direction: 'vertical',
    autoplay: {
        pauseOnMouseEnter: true,
        delay: 500,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    loop: true,
    effect: 'cube',
    speed: 500,
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
});