
// Scroll elements 

window.sr = ScrollReveal({
    reset: true, 
    distance: '200px'
})

/* index reveal */

sr.reveal('.welcome-web-page', {
    duration: 1000, 
    origin: 'left'
})

sr.reveal('.areabtnhome', {
    duration: '4000', 
    rotate: {
        x: '100', y: '0', z: '0'
    }
})

/* about page reveal*/

sr.reveal('.box-right', {
    duration: '1000',
    rotate: {
        x: '0', y: '10', z: '0'
    }
})

sr.reveal('#more-box', {
    duration: '1000',
    rotate: {
        x: '0', y: '10', z: '0'
    }
})

sr.reveal('.text-introduction', {
    duration: '1000',
    origin: 'right'
})

/* cadastro - add create */

sr.reveal('.imageAPI', {
    duration: '1000',
    origin: 'right'
})

sr.reveal('.titleDataBase', {
    duration: '1000',
    origin: 'left'
})

sr.reveal('.paragraph', {
    duration: '1000',
    origin: 'left'
})

sr.reveal('#formUser', {
    duration: '2000', 
    scale: '1', 
    origin: 'top'
})