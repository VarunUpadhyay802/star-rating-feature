function StarRating() {
    const stars = document.querySelectorAll('.star');
    console.log("Stars found:", stars.length);

  
    let currentRating = 0;    // What star is clicked
    let tempRating = 0;       // What star is being hovered

    // Add this to make stars respond to hover
    stars.forEach((star, index) => {
        star.addEventListener('mouseenter', () => {
            console.log("Hovering over star:", index + 1);
            const path = star.querySelector('path');
            path.style.fill = '#FFD700';
        });

        star.addEventListener('mouseleave', () => {
            console.log("Mouse left star:", index + 1);
            const path = star.querySelector('path');
            path.style.fill = '#E5E7EB';  // Gray color
        });
    });
}

 // Run when page loads
 StarRating();