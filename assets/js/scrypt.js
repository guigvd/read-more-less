const button = document.getElementById('btn');

button.addEventListener('click', function (){
    const card = document.querySelector('.card');
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        return button.textContent = 'Read less'
    }

    return button.textContent = 'Read more'
});

