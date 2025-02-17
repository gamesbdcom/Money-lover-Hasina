let score = 0;

function feedMan(item) {
    const manImage = document.getElementById('man');
    const message = document.getElementById('message');
    const scoreDisplay = document.getElementById('score');

    if (item === 'money') {
        manImage.src = 'https://i.postimg.cc/k5NjXzDH/images-1-removebg-preview.png';
        message.textContent = 'Yay! He got money and is very happy!';
        score += 10;
    } else if (item === 'gold') {
        manImage.src = 'https://i.postimg.cc/k5NjXzDH/images-1-removebg-preview.png';
        message.textContent = 'Wow! He got Gold, he is super happy!';
        score += 20;
    } else if (item === 'car') {
        manImage.src = 'https://i.postimg.cc/JzHrgct0/images-removebg-preview.png';
        message.textContent = 'Whoa! He got a Car! Jackpot!';
        score += 50;
    } else {
        manImage.src = 'https://i.postimg.cc/bNTkrPRk/images-2-removebg-preview.png';
        message.textContent = 'Oops! He wanted money, not this!';
        score -= 5;
    }

    scoreDisplay.textContent = score;

    manImage.style.transform = 'scale(1.1)';
    setTimeout(() => {
        manImage.style.transform = 'scale(1)';
    }, 300);
}
