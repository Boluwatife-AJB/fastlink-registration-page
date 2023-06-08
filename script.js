var showPassword = function (event) {
    var eyeIcon = event.target;
    var passwordContainer = eyeIcon.parentElement;
    var passwordInput = passwordContainer.querySelector('input');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.replace('ri-eye-off-line', 'ri-eye-line');
    }
    else {
        passwordInput.type = 'password';
        eyeIcon.classList.replace('ri-eye-line', 'ri-eye-off-line');
    }
};
var passwordContainers = document.querySelectorAll('.password-container');
passwordContainers.forEach(function (container) {
    var passwordInput = container.querySelector('input');
    var showPasswordIcon = container.querySelector('.show-password');
    passwordInput.addEventListener('focus', function () {
        container.classList.add('focused');
    });
    passwordInput.addEventListener('blur', function () {
        container.classList.remove('focused');
    });
    showPasswordIcon.addEventListener('click', showPassword);
});
