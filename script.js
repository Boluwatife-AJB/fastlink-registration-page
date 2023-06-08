var showPassword = function (event) {
    var eyeIcon = event.target;
    var passwordInput = eyeIcon.previousElementSibling;
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.replace('ri-eye-off-line', 'ri-eye-line');
    }
    else {
        passwordInput.type = 'password';
        eyeIcon.classList.replace('ri-eye-line', 'ri-eye-off-line');
    }
};
var showPasswordIcons = document.querySelectorAll('.show-password');
showPasswordIcons.forEach(function (icon) {
    icon.addEventListener('click', showPassword);
});
