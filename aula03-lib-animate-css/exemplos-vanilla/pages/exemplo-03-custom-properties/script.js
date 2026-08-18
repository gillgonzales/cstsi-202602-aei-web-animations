




let logoAnimatecssDiv = document.querySelector('.logoAnimatecss');

logoAnimatecssDiv.addEventListener('mouseover', () => {
    console.log(logoAnimatecssDiv)
    logoAnimatecssDiv.classList.remove('logoAnimatecss__fadeIn');
    logoAnimatecssDiv.classList.add('animate__animated', 'animate__fadeOut');
    logoAnimatecssDiv.style.setProperty('--animate-duration', '4s');
})

logoAnimatecssDiv.addEventListener('mouseleave', () => {
    console.log(logoAnimatecssDiv)
    logoAnimatecssDiv.classList.remove('animate__fadeOut');
    logoAnimatecssDiv.classList.add('logoAnimatecss__fadeIn animate__animated', 'animate__fadeIn');
    logoAnimatecssDiv.style.setProperty('--animate-duration', '4s');
})