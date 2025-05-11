const professionButtons = document.querySelectorAll("#professionOptions button");
const budgetSection = document.getElementById("budgetSection");
const locationSection = document.getElementById("locationSection");
const resultsSection = document.getElementById("resultsSection");
const workersList = document.getElementById("workersList");

professionButtons.forEach(button => {
  button.addEventListener("click", function () {
    const profession = this.textContent;
    budgetSection.style.display = "block";
    budgetSection.dataset.profession = profession;
  });
});

const budgetButtons = document.querySelectorAll("#budgetSection button");
budgetButtons.forEach(button => {
  button.addEventListener("click", function () {
    const budget = this.dataset.budget;
    locationSection.style.display = "block";
    locationSection.dataset.budget = budget;
  });
});

document.getElementById("locationSelect").addEventListener("change", function () {
  const profession = budgetSection.dataset.profession;
  const budget = locationSection.dataset.budget;
  const location = this.value;

  if (location) {
    fetchWorkers(profession, budget, location);
  }
});

function fetchWorkers(profession, budget, location) {
  fetch(`http://localhost:5000/workers?profession=${profession}&budget=${budget}&location=${location}`)
    .then(response => response.json())
    .then(workers => {
      workersList.innerHTML = '';
      workers.forEach(worker => {
        const workerCard = document.createElement("div");
        workerCard.classList.add("col-md-4");
        workerCard.innerHTML = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${worker.name}</h5>
              <p class="card-text">${worker.profession} - ${worker.location}</p>
              <p class="card-text">Rating: ${worker.rating.toFixed(1)} ⭐</p>
            </div>
          </div>
        `;
        workersList.appendChild(workerCard);
      });
      resultsSection.style.display = "block";
    })
    .catch(error => console.error(error));
}

document.addEventListener('DOMContentLoaded', function() {
    // Get user name from localStorage
    const userName = localStorage.getItem('userName') || 'مستخدم';
    document.getElementById('userName').textContent = userName;

    // Show welcome message
    showWelcomeMessage(userName);
});

function showWelcomeMessage(name) {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'alert alert-success alert-dismissible fade show';
    welcomeMessage.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="bi bi-person-check-fill fs-4 me-2"></i>
            <div>
                <strong>مرحباً ${name}!</strong>
                <p class="mb-0">تم تسجيل دخولك بنجاح إلى لوحة تحكم العميل</p>
            </div>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    document.querySelector('.container').insertBefore(welcomeMessage, document.querySelector('.container').firstChild);
}
