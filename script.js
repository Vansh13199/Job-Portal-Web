document.addEventListener('DOMContentLoaded', () => {
    const jobForm = document.getElementById('job-form');
    const jobsContainer = document.querySelector('.jobs');

    jobForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const company = document.getElementById('company').value;
        const location = document.getElementById('location').value;
        const description = document.getElementById('description').value;

        addJobCard(title, company, location, description);
        jobForm.reset();
    });

    function addJobCard(title, company, location, description) {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');

        jobCard.innerHTML = `
            <h3>${title}</h3>
            <p class="company"><i class="fas fa-building"></i> ${company}</p>
            <p class="location"><i class="fas fa-map-marker-alt"></i> ${location}</p>
            <p class="job-desc">${description}</p>
            <div class="job-actions">
                <button class="apply-btn">Apply Now</button>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        // Delete functionality
        jobCard.querySelector('.delete-btn').addEventListener('click', () => {
            jobCard.remove();
        });

        // Edit functionality
        jobCard.querySelector('.edit-btn').addEventListener('click', () => {
            document.getElementById('title').value = title;
            document.getElementById('company').value = company;
            document.getElementById('location').value = location;
            document.getElementById('description').value = description;

            // Remove the card
            jobCard.remove();

            // Scroll to form (using new ID or just scroll to top of job section)
            document.getElementById('post-job').scrollIntoView({ behavior: 'smooth' });
        });

        jobsContainer.prepend(jobCard);
    }
});
