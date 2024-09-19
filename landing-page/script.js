document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        if (targetSection) {
            window.scrollTo ({
                top: targetSection.offsetTop -50,
                behavior: 'smooth'
            });
        }
    });
});

const buyButton = document.querySelector('.buy-btn');
buyButton.addEventListener('click', function() {
    alert('Thank you for patronising with us');
});

window.addEventListener('scroll', function() {
    const navbar = querySelector('.navbar');
    if (this.window.scrollY > 100) {
        navbar.style.backgroundColor = '#222';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});
document.getElementById("price").innerText = "$89.99";


// customer reviews
const reviews = [
    {
        name: "John Paul",
        review: "This product is excellent, very comfortable. I'd recommend it 100%",
    },
    {
        name: "Fred Clinton",
        review: "Very good quality and worth the price",
    },
    {
        name: "Alice Harris",
        review: "COmfortable and stylish",
    },
];

const reviewList = document.querySelector(".review-list");
reviews.forEach(review => {
    const reviewItem = document.createElement("li");
    reviewItem.innerHTML = `<strong> ${review
        .name}:</strong> ${review.review}`;
        reviewList.appendChild(reviewItem);
});