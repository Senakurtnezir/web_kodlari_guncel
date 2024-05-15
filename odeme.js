document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('paymentForm');
    const message = document.getElementById('message');
  
    paymentForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const fullName = document.getElementById('fullName').value;
      const cardNumber = document.getElementById('cardNumber').value;
  
      if (!fullName || !cardNumber) {
        showMessage('Lütfen tüm alanları doldurun.', 'error');
        return;
      }
  
      // Ödeme işlemi burada gerçekleştirilebilir, ancak bu sadece bir örnektir
      // Gerçek bir ödeme işlemi için ödeme servisi veya API'si kullanılmalıdır
  
      showMessage('Ödeme başarıyla tamamlandı.', 'success');
      paymentForm.reset();
    });
  
    function showMessage(msg, className) {
      const div = document.createElement('div');
      div.className = className;
      div.appendChild(document.createTextNode(msg));
      message.appendChild(div);
  
      setTimeout(function() {
        div.remove();
      }, 3000);
    }
  });
  