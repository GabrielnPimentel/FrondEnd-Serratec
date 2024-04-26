document.addEventListener('DOMContentLoaded', function() {
    var screen = document.querySelector('.screen');
    var formInputs = document.querySelectorAll('.form input, .form select');

    formInputs.forEach(function(input) {
        input.addEventListener('focus', function() {
            screen.classList.add('no-animation');
        });

        input.addEventListener('blur', function() {
            screen.classList.remove('no-animation');
        });
    });
});
