document.addEventListener('DOMContentLoaded', function() {
    // Get worker details from localStorage
    const worker = JSON.parse(localStorage.getItem('selectedWorker'));
    if (!worker) {
        window.location.href = 'workers-list.html';
        return;
    }

    // Display worker information
    document.getElementById('workerName').textContent = worker.name;
    document.getElementById('workerProfession').textContent = worker.profession;
    document.getElementById('workerLocation').textContent = worker.location;
    document.getElementById('workerExperience').textContent = `${worker.experience} سنوات`;
    document.getElementById('workerImage').src = worker.image;

    // Get user name from localStorage
    const userName = localStorage.getItem('userName') || 'مستخدم';

    // Set default name in the form
    document.getElementById('name').value = userName;

    // Handle form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            address: document.getElementById('address').value,
            message: document.getElementById('message').value,
            workerId: worker.id,
            workerName: worker.name,
            workerProfession: worker.profession
        };

        // Store the request in localStorage (in a real app, this would be sent to a server)
        const requests = JSON.parse(localStorage.getItem('workRequests') || '[]');
        requests.push({
            ...formData,
            id: Date.now(),
            status: 'pending',
            createdAt: new Date().toISOString()
        });
        localStorage.setItem('workRequests', JSON.stringify(requests));

        // Show success message
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3';
        alertDiv.innerHTML = `
            <i class="bi bi-check-circle-fill me-2"></i>
            تم إرسال طلبك بنجاح! سيتم التواصل معك قريباً.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        document.querySelector('.contact-form').insertBefore(alertDiv, document.getElementById('contactForm'));

        // Reset form
        document.getElementById('contactForm').reset();
        document.getElementById('name').value = userName;

        // Redirect to user dashboard after 2 seconds
        setTimeout(() => {
            window.location.href = 'user-dashboard.html';
        }, 2000);
    });

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').min = today;
}); 