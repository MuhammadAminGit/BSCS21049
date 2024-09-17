document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
            document.querySelector('.navbar').classList.add('sticky');
        } else {
            document.querySelector('.navbar').classList.remove('sticky');
        }
    });

    document.querySelector('.menu-btn').addEventListener('click', function () {
        document.querySelector('.navbar .menu').classList.toggle('active');
        document.querySelector('.menu-btn i').classList.toggle('active');
    });

});
