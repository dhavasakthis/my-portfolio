// JavaScript for certificate enlargement
document.addEventListener('DOMContentLoaded', () => {
    const certificates = document.querySelectorAll('.cert-image');

    certificates.forEach(cert => {
        cert.addEventListener('click', () => {
            certificates.forEach(c => c.classList.remove('enlarged'));
            cert.classList.add('enlarged');
        });
    });
});

// internship
document.querySelectorAll('.dropdown-title').forEach(title => {
    title.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

// project
function toggleDetails(element) {
    const details = element.querySelector('.project-details');
    const allDetails = document.querySelectorAll('.project-details');
    allDetails.forEach(detail => {
        if (detail !== details) {
            detail.style.display = 'none';
        }
    });
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}
