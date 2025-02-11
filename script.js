// Countdown Timer
const countdown = document.getElementById('countdown');
const targetDate = new Date(new Date().getFullYear(), 1, 12).getTime(); // 12 กุมภาพันธ์
setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance >= 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdown.innerHTML = `${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;
    } else {
        countdown.innerHTML = "สุขสันต์วันครบรอบ 6 เดือนแล้วนะ! 🎉";
    }
}, 1000);

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.backgroundColor = getRandomColor();
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}

function getRandomColor() {
    const colors = ['#ff6f61', '#f06292', '#ba68c8', '#64b5f6', '#4db6ac'];
    return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(createFloatingHeart, 500);

const quotes = [
    "รักคิมทุกวันเลยยนะคะ💜",
    "ขอบคุณที่เข้ามาเติมเต็มชีวิตออม💞",
    "อยู่ด้วยกันแบบนี้ไปนานนานเลยน๊า💐",
    "ทุกวันคือวันพิเศษเพราะมีคิมเป็นหมาเด็กของออม🌟",
];

function displayRandomQuote() {
    const quoteBox = document.getElementById('quote-box');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteBox.textContent = quotes[randomIndex];
}

// แสดงคำหวานใหม่ทุก 5 วินาที
setInterval(displayRandomQuote, 5000);
displayRandomQuote();

document.getElementById("toggle-theme").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
function sendMessage() {
    let messageInput = document.getElementById("kim-message");
    let messageDisplay = document.getElementById("message-display");

    if (messageInput.value.trim() !== "") {
        let newMessage = document.createElement("p");
        newMessage.textContent = "คิม: " + messageInput.value;
        messageDisplay.appendChild(newMessage);
        messageInput.value = ""; // เคลียร์ช่องหลังจากส่ง
    }
}
let currentIndex = 0;

function showSlide(index) {
    let slider = document.querySelector(".slider");
    let totalSlides = document.querySelectorAll(".slider img").length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}
if (distance <= 0) {
    countdown.innerHTML = "สุขสันต์วันครบรอบ 6 เดือนแล้วนะ! 🎉";
    document.body.classList.add('celebration');
}
