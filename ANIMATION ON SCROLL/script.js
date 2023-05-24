
window.addEventListener('scroll', () => {
    let row = document.querySelector('.row')
    let rowPosition = row.getBoundingClientRect().top;
    let windowPosition = window.innerHeight;
    console.log("1st for window " + windowPosition)
    console.log("1st for rowposition " + rowPosition)
    if(rowPosition < windowPosition) {
        row.classList.add('active')
        console.log("2nd for window " + windowPosition)
    console.log("2nd for rowposition " + rowPosition)
    }
    else {
        row.classList.remove('active')
        console.log("3rd for window " + windowPosition)
    console.log("3rd for rowposition " + rowPosition)
    }
})