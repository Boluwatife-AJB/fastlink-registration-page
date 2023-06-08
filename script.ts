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
