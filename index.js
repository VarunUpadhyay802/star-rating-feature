function StarRating() {
    const stars = document.querySelectorAll('.star');
    
    let currentRating = 0;
    let tempRating = 0;

    // This function will update star colors
    function updateStars() {
        stars.forEach((star, index) => {
            const path = star.querySelector('path');
            // If this star's index is less than temp or current rating
            if (index < (tempRating || currentRating)) {
                path.style.fill = '#FFD700';  // Gold
            } else {
                path.style.fill = '#E5E7EB';  // Gray
            }
        });
    }

    stars.forEach((star, index) => {
        // When mouse enters a star
        star.addEventListener('mouseenter', () => {
            tempRating = index + 1;
            updateStars();
            console.log("Hovering over:", tempRating);
        });

        // When star is clicked
        star.addEventListener('click', () => {
            currentRating = index + 1;
            updateStars();
            console.log("You rated:", currentRating);
        });
    });

    // When mouse leaves the container
    const container = document.querySelector('#star-rating');
    container.addEventListener('mouseleave', () => {
        tempRating = 0;  // Reset temporary rating
        updateStars();   // Show only clicked rating
    });
}

StarRating();