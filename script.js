
//Projects section

//code to hide and show more projects
// code also scrolls to the more projects
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const toggleSection = document.getElementById('toggleSection');
    const scrollToSection = document.getElementById('scrollToSection');

    toggleButton.addEventListener('click', () => {
        if (toggleSection.style.display === 'none' || toggleSection.style.display === '') {
            toggleSection.style.display = 'block';
            toggleButton.textContent = 'Show Less Projects';
            const offset = -180; // offset added to not scroll directly to the top of section
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = toggleSection.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        } else {
            toggleSection.style.display = 'none';
            toggleButton.textContent = 'Show More Projects';
            const offset = -180; // offset added to not scroll directly to the top of section
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = scrollToSection.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});