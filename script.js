function subirPagina() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

}function monitoraScroll() {
    if(window.scrollY === 0) {
        document.querySelector('.buttonscroll').style.display = 'none';
    } else {
        document.querySelector('.buttonscroll').style.display = 'block';
    }
}

window.addEventListener('scroll', monitoraScroll);