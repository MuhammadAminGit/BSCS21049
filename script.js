document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
            document.querySelector('.navbar').classList.add('sticky');
        } else {
            document.querySelector('.navbar').classList.remove('sticky');
        }
    });
});