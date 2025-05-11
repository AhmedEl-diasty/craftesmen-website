document.addEventListener('DOMContentLoaded', function() {
    // Get worker name from localStorage
    const workerName = localStorage.getItem('userName') || 'حرفي';
    document.getElementById('workerName').textContent = workerName;

    // Show welcome message
    showWelcomeMessage(workerName);
});

function showWelcomeMessage(name) {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'alert alert-success alert-dismissible fade show';
    welcomeMessage.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="bi bi-person-check-fill fs-4 me-2"></i>
            <div>
                <strong>مرحباً ${name}!</strong>
                <p class="mb-0">تم تسجيل دخولك بنجاح إلى لوحة تحكم الحرفي</p>
            </div>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    document.querySelector('.container').insertBefore(welcomeMessage, document.querySelector('.container').firstChild);
}

function showJobDetails(profession, location) {
    document.getElementById('jobProfession').textContent = profession;
    document.getElementById('jobLocation').textContent = location;
    document.getElementById('jobDetailsSection').style.display = 'block';
}

function applyForJob() {
    const profession = document.getElementById('jobProfession').textContent;
    const location = document.getElementById('jobLocation').textContent;
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'alert alert-success alert-dismissible fade show mt-3';
    successMessage.innerHTML = `
        <strong>تم تقديم طلبك بنجاح!</strong> سيتم إخطارك عندما يتم قبول طلبك.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    document.getElementById('jobDetailsSection').appendChild(successMessage);
    
    // Hide job details after 2 seconds
    setTimeout(() => {
        document.getElementById('jobDetailsSection').style.display = 'none';
    }, 2000);
}
