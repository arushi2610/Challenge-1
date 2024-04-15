// REVIEWS

const reviews = [
    {
        rating: "Rated 5 Stars in Reviews"
    },

    {
        rating: "Rated 5 Stars in Report Guru"
    },

    {
        rating: "Rated 5 Stars in BestTech"
    }
]

function repeatStars(){
    let stars = "";
    for (let i = 0; i < 5; i++){
        stars += `<img src="http://127.0.0.1:5500/social-proof-section-master/images/icon-star.svg"/>`;
    }
    return stars;
}

const reviewTemplate = (review) => 
`<div class="review"
<div class="stars">${repeatStars()}</div>
<div class="rating">${review.rating}</div>
</div>`;

let reviewOutput = "";

for (const review of reviews){
    const filledReview = reviewTemplate(review);
    reviewOutput += filledReview;
}

document.getElementById("review-section").innerHTML = reviewOutput;

// FEEDBACK

const testimonials = [
    {
        image: `http://127.0.0.1:5500/social-proof-section-master/images/image-colton.jpg`,
        name: "Colton Smith",
        verified: "Verified Buyer",
        feedback: "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
    },

    {
        image: `http://127.0.0.1:5500/social-proof-section-master/images/image-irene.jpg`,
        name: "Irene Roberts",
        verified: "Verified Buyer",
        feedback: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
    },

    {
        image: `http://127.0.0.1:5500/social-proof-section-master/images/image-anne.jpg`,
        name: "Anne Wallace",
        verified: "Verified Buyer",
        feedback: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
    }
]

const containerTemplate = (testimonial) =>
`<div class="container">
<div class="image"><img src=${testimonial.image}></div>
<div class="name">${testimonial.name}</div>
<div class="verified">${testimonial.verified}</div>
<div class="feedback">${testimonial.feedback}</div>
</div>`;

let testimonialOutput = "";

for (const testimonial of testimonials){
    const filledTemplate = containerTemplate(testimonial);
    testimonialOutput += filledTemplate;
}

document.getElementById("testimonials-container").innerHTML = testimonialOutput;