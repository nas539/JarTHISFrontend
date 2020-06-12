function activateLoginPageButton() {
    let loginData
    fetch("", { method: "GET" })
    .then(response => response.json())
    .then(data => {
        const loginPageButton = document.getElementById('login-page-button');
        loginPageButton.addEventListener('click', login);
        const emailLoginInput = document.getElementById('email-login');
        const passwordLoginInput = document.getElementById('password-login');
    
    
    
        }
    )}
    
    
