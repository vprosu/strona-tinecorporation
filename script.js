document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.project-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Animacja kliknięcia
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
            
            // Wyświetlenie komunikatu
            alert('Ten projekt jest obecnie w trakcie rozwoju. Zapraszamy wkrótce!');
        });
    });
}); 