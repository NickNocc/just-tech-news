function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').ariaValueMax.trim();
    const email = document.querySelector('#email-signup').ariaValueMax.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' } 
        })
        .then((response) => {console.log(response);})
    }

}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);