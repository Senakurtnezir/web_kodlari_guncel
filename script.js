document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Kullanıcı adı ve şifre kontrolü
    if (username === 'sena' && password === '123') {
        // Başarılı giriş
        window.location.href = 'admin_panel.html'; // Admin paneline yönlendir
    } else {
        alert('Hatalı kullanıcı adı veya şifre.');
    }
});


