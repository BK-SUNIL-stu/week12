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
// १. हबीका तस्बिरहरूको Array (तपाईंले चाहेमा यी URLs फेर्न सक्नुहुन्छ)
const hobbyImages = [
    "https://images.unsplash.com/photo-1652260957608-927b3320c705?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA4fHxjb29raW5nfGVufDB8fDB8fHww", // फोटो १ (उदा: ट्रेकिङ/घुम्ने)
    "https://images.unsplash.com/photo-1472745433479-4556f22e32c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHJlYWRpbmd8ZW58MHx8MHx8fDA%3D", // फोटो २ (उदा: फोटोग्राफी/जनावर)
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nfGVufDB8fDB8fHww"  // फोटो ३ (उदा: प्रकृति/लोकेसन)
];

// २. सुरुको तस्बिरको स्थान (Zero-Based Indexing अनुसार 0 बाट सुरु हुन्छ)
let currentIndex = 0;

// ३. HTML elements लाई सेलेक्ट गर्ने
const galleryImg = document.getElementById("gallery-img");
const nextBtn = document.getElementById("next-btn");

// ४. बटनमा क्लिक गर्दा चल्ने Event Listener
nextBtn.addEventListener("click", function() {
    // इन्डेक्सलाई १ ले बढाउने (अर्को फोटोमा जान)
    currentIndex = currentIndex + 1;

    // ५. Crucial Step: यदि इन्डेक्स Array को लम्बाइ (length) बराबर पुग्यो भने 0 मा रिसेट गर्ने
    // यसले गर्दा 'undefined' एरर आउँदैन र ग्यालेरी लगातार घुमिरहन्छ (Loop हुन्छ)
    if (currentIndex >= hobbyImages.length) {
        currentIndex = 0; 
    }

    // ६. HTML को image source (src) लाई नयाँ तस्बिरको URL ले अपडेट गर्ने
    galleryImg.src = hobbyImages[currentIndex];
    
    // प्रोफेसरलाई देखाउन कन्सोलमा पनि प्रिन्ट गर्ने (कुनै एरर छैन भनेर पक्का गर्न)
    console.log("Current Image Index:", currentIndex, "URL:", hobbyImages[currentIndex]);
});console.log('Hello!');
