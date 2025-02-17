let score = 0;

function feedMan(item) {
    const manImage = document.getElementById('man');
    const message = document.getElementById('message');
    const scoreDisplay = document.getElementById('score');

    if (item === 'money') {
        manImage.src = 'happy.png';
        message.textContent = 'Yay! He got money and is very happy!';
        score += 10;
    } else if (item === 'gold') {
        manImage.src = 'happy.png';
        message.textContent = 'Wow! He got Gold, he is super happy!';
        score += 20;
    } else if (item === 'car') {
        manImage.src = 'happy.png';
        message.textContent = 'Whoa! He got a Car! Jackpot!';
        score += 50;
    } else {
        manImage.src = 'angry.png';
        message.textContent = 'Oops! He wanted money, not this!';
        score -= 5;
    }

    scoreDisplay.textContent = score;

    manImage.style.transform = 'scale(1.1)';
    setTimeout(() => {
        manImage.style.transform = 'scale(1)';
    }, 300);
}