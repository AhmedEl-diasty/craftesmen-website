document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
  
    if (name && role) {
      localStorage.setItem("userName", name);
      localStorage.setItem("userRole", role);
      
      // Show welcome message
      showWelcomeMessage(name, role);
    } else {
      alert("الرجاء إدخال جميع البيانات المطلوبة.");
    }
  });
  
function showWelcomeMessage(name, role) {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'alert alert-success alert-dismissible fade show';
    welcomeMessage.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="bi bi-person-check-fill fs-4 me-2"></i>
            <div>
                <strong>مرحباً ${name}!</strong>
                <p class="mb-0">تم تسجيل دخولك بنجاح ك${role === 'worker' ? 'حرفي' : 'عميل'}</p>
            </div>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    document.querySelector('.card-body').insertBefore(welcomeMessage, document.querySelector('form'));

    // Redirect after 2 seconds
    setTimeout(() => {
        window.location.href = role === 'worker' ? 'worker-dashboard.html' : 'user-dashboard.html';
    }, 2000);
}
  