document.getElementById('urun_sil_button').addEventListener('click', function(event) {
    event.preventDefault();
    
    // Ürünleri gösteren sayfaya yönlendir
    window.location.href = 'urun_silme.html';
});