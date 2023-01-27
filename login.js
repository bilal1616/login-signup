/**
 * Değişkenler(Variables)
 */
 const signupButton = document.getElementById('signup-button'),
 loginButton = document.getElementById('login-button'),
 userForms = document.getElementById('user_options-forms')

/**
* Add event listener to the "Sign Up" button("Kaydol" düğmesine Add event listener ekleyin)
*/
signupButton.addEventListener('click', () => {
userForms.classList.remove('bounceRight')
userForms.classList.add('bounceLeft')
}, false)

/**
* Add event listener to the "Login" button("Giriş" düğmesine Add event listener ekleyin)
*/
loginButton.addEventListener('click', () => {
userForms.classList.remove('bounceLeft')
userForms.classList.add('bounceRight')
}, false)