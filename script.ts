const showPassword = (event: MouseEvent) => {
  const eyeIcon = event.target as HTMLElement;
  const passwordInput = eyeIcon.previousElementSibling as HTMLInputElement;

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.classList.replace('ri-eye-off-line', 'ri-eye-line');
  } else {
    passwordInput.type = 'password';
    eyeIcon.classList.replace('ri-eye-line', 'ri-eye-off-line');
  }
};

const showPasswordIcons = document.querySelectorAll('.show-password');
showPasswordIcons.forEach((icon) => {
  icon.addEventListener('click', showPassword);
});
