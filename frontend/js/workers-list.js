document.addEventListener('DOMContentLoaded', function() {
    // Get user name from localStorage
    const userName = localStorage.getItem('userName') || 'مستخدم';
    
    // Show welcome message
    showWelcomeMessage(userName);
    
    // Get selected profession, budget, and location from localStorage
    const selectedProfession = localStorage.getItem('selectedProfession') || '';
    const selectedBudget = localStorage.getItem('selectedBudget') || '';
    const selectedLocation = localStorage.getItem('selectedLocation') || '';
    
    // Set initial filter values if they exist
    if (selectedProfession) {
        const professionRadio = document.querySelector(`input[name="profession"][value="${selectedProfession}"]`);
        if (professionRadio) {
            professionRadio.checked = true;
        }
    }
    
    if (selectedBudget) {
        const budgetRadio = document.querySelector(`input[name="budget"][value="${selectedBudget}"]`);
        if (budgetRadio) {
            budgetRadio.checked = true;
        }
    }
    
    if (selectedLocation) {
        const locationRadio = document.querySelector(`input[name="location"][value="${selectedLocation}"]`);
        if (locationRadio) {
            locationRadio.checked = true;
        }
    }
    
    // Sample workers data (in a real app, this would come from an API)
    const workers = [
        {
            id: 1,
            name: 'أحمد محمد',
            profession: 'نجار',
            location: 'المنصورة',
            rating: 4.8,
            price: 'متوسط',
            image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            experience: '10 سنوات'
        },
        {
            id: 2,
            name: 'محمد علي',
            profession: 'سباك',
            location: 'القاهرة',
            rating: 4.5,
            price: 'منخفض',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            experience: '5 سنوات'
        },
        {
            id: 3,
            name: 'خالد أحمد',
            profession: 'كهربائي',
            location: 'الإسكندرية',
            rating: 4.9,
            price: 'عالي',
            image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            experience: '15 سنة'
        },
        {
            id: 4,
            name: 'عبدالله سعيد',
            profession: 'دهان',
            location: 'الجيزة',
            rating: 4.2,
            price: 'متوسط',
            image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            experience: '8 سنوات'
        },
        {
            id: 5,
            name: 'ياسر محمد',
            profession: 'بناء',
            location: 'كفر الشيخ',
            rating: 4.7,
            price: 'عالي',
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            experience: '12 سنة'
        },
        {
            id: 6,
            name: 'كريم أحمد',
            profession: 'ميكانيكي',
            location: 'المنصورة',
            rating: 4.6,
            price: 'متوسط',
            image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            experience: '7 سنوات'
        },
        {
            id: 7,
            name: 'أحمد خالد',
            profession: 'نجار',
            location: 'القاهرة',
            rating: 4.3,
            price: 'منخفض',
            image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            experience: '6 سنوات'
        },
        {
            id: 8,
            name: 'محمد سعيد',
            profession: 'سباك',
            location: 'الإسكندرية',
            rating: 4.4,
            price: 'متوسط',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            experience: '9 سنوات'
        }
    ];
    
    // Render workers
    renderWorkers(workers);
    
    // Add event listeners to filter inputs
    const filterInputs = document.querySelectorAll('input[type="radio"]');
    filterInputs.forEach(input => {
        input.addEventListener('change', function() {
            filterWorkers();
        });
    });
    
    // Filter workers based on selected filters
    function filterWorkers() {
        const selectedProfession = document.querySelector('input[name="profession"]:checked').value;
        const selectedBudget = document.querySelector('input[name="budget"]:checked').value;
        const selectedLocation = document.querySelector('input[name="location"]:checked').value;
        
        let filteredWorkers = workers;
        
        // Filter by profession
        if (selectedProfession !== 'all') {
            filteredWorkers = filteredWorkers.filter(worker => worker.profession === selectedProfession);
        }
        
        // Filter by budget
        if (selectedBudget !== 'all') {
            filteredWorkers = filteredWorkers.filter(worker => {
                if (selectedBudget === 'low' && worker.price === 'منخفض') return true;
                if (selectedBudget === 'medium' && worker.price === 'متوسط') return true;
                if (selectedBudget === 'high' && worker.price === 'عالي') return true;
                return false;
            });
        }
        
        // Filter by location
        if (selectedLocation !== 'all') {
            filteredWorkers = filteredWorkers.filter(worker => worker.location === selectedLocation);
        }
        
        // Render filtered workers
        renderWorkers(filteredWorkers);
    }
    
    // Render workers in the list
    function renderWorkers(workersToRender) {
        const workersList = document.getElementById('workersList');
        const noResults = document.getElementById('noResults');
        
        // Clear workers list
        workersList.innerHTML = '';
        
        // Show no results message if no workers match the filters
        if (workersToRender.length === 0) {
            noResults.style.display = 'block';
            return;
        }
        
        // Hide no results message
        noResults.style.display = 'none';
        
        // Add worker cards to the list
        workersToRender.forEach(worker => {
            const workerCard = document.createElement('div');
            workerCard.className = 'col-md-4 col-sm-6';
            workerCard.innerHTML = `
                <div class="worker-card card border-0 shadow-sm">
                    <img src="${worker.image}" class="worker-image" alt="${worker.name}">
                    <div class="card-body p-4">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h5 class="card-title mb-0">${worker.name}</h5>
                            <span class="worker-rating">${worker.rating} <i class="bi bi-star-fill"></i></span>
                        </div>
                        <p class="card-text mb-2">
                            <i class="bi bi-tools me-2"></i> ${worker.profession}
                        </p>
                        <p class="card-text mb-2">
                            <i class="bi bi-geo-alt me-2"></i> <span class="worker-location">${worker.location}</span>
                        </p>
                        <p class="card-text mb-2">
                            <i class="bi bi-clock-history me-2"></i> الخبرة: ${worker.experience}
                        </p>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <span class="worker-price">الميزانية: ${worker.price}</span>
                            <button class="btn btn-primary" onclick="contactWorker(${worker.id})">تواصل معه</button>
                        </div>
                    </div>
                </div>
            `;
            workersList.appendChild(workerCard);
        });
    }
    
    // Contact worker function
    window.contactWorker = function(workerId) {
        // Get worker details
        const worker = workers.find(w => w.id === workerId);
        
        // Store worker details in localStorage
        localStorage.setItem('selectedWorker', JSON.stringify(worker));
        
        // Redirect to contact page
        window.location.href = 'contact-worker.html';
    };
});

function showWelcomeMessage(name) {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'alert alert-success alert-dismissible fade show';
    welcomeMessage.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="bi bi-person-check-fill fs-4 me-2"></i>
            <div>
                <strong>مرحباً ${name}!</strong>
                <p class="mb-0">هذه قائمة الحرفيين المتاحين حسب اختياراتك</p>
            </div>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    document.querySelector('.container').insertBefore(welcomeMessage, document.querySelector('.container').firstChild);
} 