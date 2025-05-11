document.addEventListener('DOMContentLoaded', function() {
    // Get user name from localStorage
    const userName = localStorage.getItem('userName') || 'مستخدم';
    
    // Show welcome message
    showWelcomeMessage(userName);
    
    // Profession selection
    const professionCards = document.querySelectorAll('.profession-card');
    const budgetSection = document.getElementById('budgetSection');
    const locationSection = document.getElementById('locationSection');
    const findWorkersBtn = document.getElementById('findWorkersBtn');
    const findWorkersByLocationBtn = document.getElementById('findWorkersByLocationBtn');
    
    let selectedProfession = '';
    let selectedBudget = '';
    let selectedLocation = '';
    
    // Add click event to profession cards
    professionCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove selected class from all cards
            professionCards.forEach(c => c.classList.remove('selected'));
            
            // Add selected class to clicked card
            this.classList.add('selected');
            
            // Get selected profession
            selectedProfession = this.getAttribute('data-profession');
            
            // Show budget section
            budgetSection.style.display = 'block';
            
            // Scroll to budget section
            budgetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Budget selection
    const budgetOptions = document.querySelectorAll('.budget-option');
    
    budgetOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            budgetOptions.forEach(o => o.classList.remove('selected'));
            
            // Add selected class to clicked option
            this.classList.add('selected');
            
            // Get selected budget
            selectedBudget = this.getAttribute('data-budget');
            
            // Enable find workers button
            findWorkersBtn.disabled = false;
            
            // Show location section
            locationSection.style.display = 'block';
            
            // Scroll to location section
            setTimeout(() => {
                locationSection.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        });
    });
    
    // Find workers button click
    findWorkersBtn.addEventListener('click', function() {
        // Store selected profession and budget in localStorage
        localStorage.setItem('selectedProfession', selectedProfession);
        localStorage.setItem('selectedBudget', selectedBudget);
        
        // Show location section
        locationSection.style.display = 'block';
        
        // Scroll to location section
        locationSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Location selection
    const locationOptions = document.querySelectorAll('.location-option');
    
    locationOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            locationOptions.forEach(o => o.classList.remove('selected'));
            
            // Add selected class to clicked option
            this.classList.add('selected');
            
            // Get selected location
            selectedLocation = this.getAttribute('data-location');
            
            // Enable find workers button
            findWorkersByLocationBtn.disabled = false;
        });
    });
    
    // Find workers by location button click
    findWorkersByLocationBtn.addEventListener('click', function() {
        // Store selected location in localStorage
        localStorage.setItem('selectedLocation', selectedLocation);
        
        // Redirect to workers page
        window.location.href = 'workers-list.html';
    });
});

function showWelcomeMessage(name) {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'alert alert-success alert-dismissible fade show';
    welcomeMessage.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="bi bi-person-check-fill fs-4 me-2"></i>
            <div>
                <strong>مرحباً ${name}!</strong>
                <p class="mb-0">اختر الحرفة المناسبة لاحتياجاتك</p>
            </div>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    document.querySelector('.container').insertBefore(welcomeMessage, document.querySelector('.container').firstChild);
} 