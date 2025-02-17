function feedMan(item) {
    const manImage = document.getElementById('man');
    const message = document.getElementById('message');

    if (item === 'money') {
        manImage.src = 'https://i.postimg.cc/rmmX1wC7/images-1-removebg-preview.png'; // টাকা দিলে খুশি
        message.textContent = 'Yay! He got money and is very happy!';
    } else {
        manImage.src = 'angry.png'; // অন্য কিছু দিলে রাগান্বিত
        message.textContent = 'Oops! He wanted money, not this!';
    }

    // মজার একটা এফেক্ট (Animation)
    manImage.style.transform = 'scale(1.1)';
    setTimeout(() => {
        manImage.style.transform = 'scale(1)';
    }, 300);
}
