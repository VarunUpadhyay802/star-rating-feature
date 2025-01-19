 // First, let's just make sure we can select our stars
 function StarRating() {
    // Get all our stars
    const stars = document.querySelectorAll('.star');
    
    // Let's check if we got them
    console.log("Stars found:", stars.length);
    
    // Color the first star yellow just to test
    const firstPath = stars[0].querySelector('path');
    firstPath.style.fill = '#FFD700';  // This is gold/yellow color
}

 // Run when page loads
 StarRating();