console.log('Hello!');
// Select the toggle button using its ID
const themeBtn = document.querySelector("#theme-toggle");

// Add the "Security Guard" (Event Listener)
themeBtn.addEventListener("click", () => {
    // Toggle the 'light-mode' class on the entire body
    document.body.classList.toggle("light-mode");

    // Logic to change the button text so the user knows what happens next
    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "🌙 Dark Mode";
    } else {
        themeBtn.textContent = "☀️ Light Mode";
    }

});

const hobbyImages = [
    "https://images.unsplash.com/photo-1652260957608-927b3320c705?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA4fHxjb29raW5nfGVufDB8fDB8fHww", // फोटो १ (उदा: ट्रेकिङ/घुम्ने)
    "https://images.unsplash.com/photo-1472745433479-4556f22e32c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHJlYWRpbmd8ZW58MHx8MHx8fDA%3D", // फोटो २ (उदा: फोटोग्राफी/जनावर)
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nfGVufDB8fDB8fHww"  // फोटो ३ (उदा: प्रकृति/लोकेसन)
];

let currentIndex = 0;

const galleryImg = document.getElementById("gallery-img");
const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", function() {
    
    currentIndex = currentIndex + 1;

    
    if (currentIndex >= hobbyImages.length) {
        currentIndex = 0; 
    }

    
    galleryImg.src = hobbyImages[currentIndex];
    
    console.log("Current Image Index:", currentIndex, "URL:", hobbyImages[currentIndex]);
});console.log('Hello!');
