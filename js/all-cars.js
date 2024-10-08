document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.all-car-card');
    const carDetailsSection = document.getElementById('car-details-section');
    const carDetailsContainers = document.querySelectorAll('.all-car-car-details-container');
    let currentDetails = null;

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const detailsId = card.getAttribute('data-details');
            const targetDetails = document.getElementById(detailsId);

            if (currentDetails === targetDetails) {
                carDetailsSection.style.maxHeight = '0';
                carDetailsSection.style.opacity = '0';
                setTimeout(() => {
                    carDetailsSection.style.display = 'none';
                    currentDetails = null;
                }, 500);
            } else {
                carDetailsContainers.forEach(container => {
                    container.style.display = 'none';
                });

                targetDetails.style.display = 'flex';
                carDetailsSection.style.display = 'block';
                setTimeout(() => {
                    carDetailsSection.style.maxHeight = '100vh';
                    carDetailsSection.style.opacity = '1';
                }, 10);
                currentDetails = targetDetails;
            }
        });
    });
});
