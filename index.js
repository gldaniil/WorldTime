const myFunction = () => {
    let columnTimes = document.getElementsByClassName('content-city__time')
    let n = 0
    setInterval(function() {
        for (let i = 0; i < columnTimes.length; i++) {
            !columnTimes[i].classList.contains('active') ? columnTimes[i].classList.add('active') : columnTimes[i].classList.remove('active')
            columnTimes[i].innerHTML = `${n++} блок`
        }
    }, 1000)
}
myFunction()