const myFunction = () => {
    let columnHeaders = document.getElementsByClassName('content-time__header')
    let n = 0
    setInterval(function() {
        for (let i = 0; i < columnHeaders.length; i++) {
            !columnHeaders[i].classList.contains('active') ? columnHeaders[i].classList.add('active') : 
            columnHeaders[i].innerHTML = `${n++} блок`
        }
    }, 1000)
}
myFunction()