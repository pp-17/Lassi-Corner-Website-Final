// Menu Category Filtering
const tabButtons = document.querySelectorAll('.tab-button');
const menuItems = document.querySelectorAll('.menu-item');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        // Show/hide menu items based on category
        menuItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
                // Add animation
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100);
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Initialize menu items with animation
menuItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Trigger initial animation
setTimeout(() => {
    menuItems.forEach(item => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    });
}, 100); 