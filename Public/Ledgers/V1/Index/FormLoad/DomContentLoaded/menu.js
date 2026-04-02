// menu.js

export function initMenu() {
    const menu = document.getElementById('menu');
    const button = document.getElementById('menuBtn');

    const toggleMenu = () => {
        menu.classList.toggle('max-h-0');
        menu.classList.toggle('max-h-96');
        menu.classList.toggle('opacity-0');
        menu.classList.toggle('opacity-100');
    };

    const closeMenu = () => {
        menu.classList.add('max-h-0', 'opacity-0');
        menu.classList.remove('max-h-96', 'opacity-100');
    };

    button.addEventListener('click', toggleMenu);

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !button.contains(e.target)) {
            closeMenu();
        }
    });
}