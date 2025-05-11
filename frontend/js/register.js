document.addEventListener('DOMContentLoaded', function() {
  const registerForm = document.getElementById('registerForm');
  const roleSelect = document.getElementById('role');
  const extraFields = document.getElementById('extraFields');

  // Show/hide extra fields based on role selection
  roleSelect.addEventListener('change', function() {
    if (this.value === 'worker') {
      extraFields.style.display = 'block';
      // Add required attribute to worker-specific fields
      document.getElementById('profession').required = true;
      document.getElementById('location').required = true;
      document.getElementById('experience').required = true;
    } else {
      extraFields.style.display = 'none';
      // Remove required attribute from worker-specific fields
      document.getElementById('profession').required = false;
      document.getElementById('location').required = false;
      document.getElementById('experience').required = false;
    }
  });

  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const userData = {
      name: document.getElementById('name').value,
      role: roleSelect.value
    };

    if (userData.role === 'worker') {
      userData.profession = document.getElementById('profession').value;
      userData.location = document.getElementById('location').value;
      userData.experience = document.getElementById('experience').value;
    }

    // Store user data in localStorage
    localStorage.setItem('userName', userData.name);
    localStorage.setItem('userRole', userData.role);
    if (userData.role === 'worker') {
      localStorage.setItem('userProfession', userData.profession);
      localStorage.setItem('userLocation', userData.location);
      localStorage.setItem('userExperience', userData.experience);
    }

    // Show welcome message
    showWelcomeMessage(userData.name, userData.role);
  });

  function showWelcomeMessage(name, role) {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'alert alert-success alert-dismissible fade show';
    welcomeMessage.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="bi bi-person-plus-fill fs-4 me-2"></i>
            <div>
                <strong>مرحباً ${name}!</strong>
                <p class="mb-0">تم إنشاء حسابك بنجاح ك${role === 'worker' ? 'حرفي' : 'عميل'}</p>
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
}); 