// Меняем цвет фона при нажатии на меню
document.querySelectorAll('.header nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.body.style.backgroundColor = '#f0f0f0';
    });
});