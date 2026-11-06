'use strict';

// Set this to the approved, deployed server-side beta signup endpoint.
// Never put Twenty credentials in this public repository.
const BETA_SIGNUP_ENDPOINT = '';
const form = document.querySelector('#beta-form');
const email = document.querySelector('#beta-email');
const status = document.querySelector('#form-status');
const button = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  status.textContent = '';
  status.removeAttribute('data-state');

  if (!email.validity.valid) {
    status.textContent = 'Enter a valid email address to join the list.';
    status.dataset.state = 'error';
    email.focus();
    return;
  }
  if (form.elements.company_url.value) return;
  if (!BETA_SIGNUP_ENDPOINT) {
    status.textContent = 'Beta signup is not available yet. Please check back soon.';
    status.dataset.state = 'error';
    return;
  }
  const captcha = window.grecaptcha?.getResponse();
  if (!captcha) {
    status.textContent = 'Please complete the security check.';
    status.dataset.state = 'error';
    return;
  }

  button.disabled = true;
  button.firstChild.textContent = 'Joining… ';
  try {
    const response = await fetch(BETA_SIGNUP_ENDPOINT, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: email.value.trim(), captcha}),
      credentials: 'omit',
    });
    if (!response.ok) throw new Error('Signup rejected');
    form.reset();
    window.grecaptcha?.reset();
    status.textContent = 'You’re on the list! Watch your inbox for Ducky OS beta updates.';
    status.dataset.state = 'success';
  } catch {
    status.textContent = 'We couldn’t add you right now. Please try again later.';
    status.dataset.state = 'error';
  } finally {
    button.disabled = false;
    button.firstChild.textContent = 'Join the beta list ';
  }
});
