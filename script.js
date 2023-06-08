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
var form = document.querySelector('.registration-form');
var submitButton = document.querySelector('input[type=button]');
submitButton.addEventListener('click', function () {
    var body = new FormData(form);
    var requestOptions = {
        method: 'POST',
        body: body,
    };
    fetch('https://fastlink-mt6m.onrender.com/api/v1/auth/signup', requestOptions)
        .then(function (response) {
        if (response.ok) {
            // Success!
            console.log('Successful💥💥');
            return response.json(); // Parse response data as JSON
        }
        else {
            // Handle error
            console.error('Network Error 🥲');
            throw new Error('Network Error');
        }
    })
        .then(function (data) {
        // Handle response data here
        console.log('Response:', data);
    })
        .catch(function (error) {
        // Handle error
        console.error('Error:', error);
    });
});
