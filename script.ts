const showPassword = (event: MouseEvent) => {
  const eyeIcon = event.target as HTMLElement;
  const passwordContainer = eyeIcon.parentElement as HTMLElement;
  const passwordInput = passwordContainer.querySelector(
    'input'
  ) as HTMLInputElement;

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.classList.replace('ri-eye-off-line', 'ri-eye-line');
  } else {
    passwordInput.type = 'password';
    eyeIcon.classList.replace('ri-eye-line', 'ri-eye-off-line');
  }
};

const passwordContainers = document.querySelectorAll('.password-container');
passwordContainers.forEach((container) => {
  const passwordInput = container.querySelector('input') as HTMLInputElement;
  const showPasswordIcon = container.querySelector(
    '.show-password'
  ) as HTMLElement;

  passwordInput.addEventListener('focus', () => {
    container.classList.add('focused');
  });

  passwordInput.addEventListener('blur', () => {
    container.classList.remove('focused');
  });

  showPasswordIcon.addEventListener('click', showPassword);
});

const form = document.querySelector('.registration-form') as HTMLFormElement;
const submitButton = document.querySelector(
  'input[type=button]'
) as HTMLInputElement;

submitButton.addEventListener('click', () => {
  const body = new FormData(form);
  const requestOptions: RequestInit = {
    method: 'POST',
    body,
  };

  fetch('https://fastlink-mt6m.onrender.com/api/v1/auth/signup', requestOptions)
    .then((response) => {
      if (response.ok) {
        // Success!
        console.log('Successful💥💥');
        return response.json(); // Parse response data as JSON
      } else {
        // Handle error
        console.error('Network Error 🥲');
        throw new Error('Network Error');
      }
    })
    .then((data) => {
      // Handle response data here
      console.log('Response:', data);
    })
    .catch((error) => {
      // Handle error
      console.error('Error:', error);
    });
});
