# Week 12 Assignment: Interactive Hobby Gallery

An interactive and dynamic **Hobby Gallery** section added to my personal digital portfolio. This project demonstrates the practical application of **JavaScript Arrays, Loops, and Conditional Logic** to handle data efficiently and prevent runtime layout/image breaks.

---

## 🚀 Features

*   **Dynamic UI Update:** Cycles through a collection of hobby-related images upon clicking the "Next Photo" button.
*   **Zero-Based Indexing:** Efficiently targets and tracks image elements stored inside a JavaScript array.
*   **Boundary/Out-of-Bounds Protection:** Implements strict `if` condition logic to safely reset the image index back to `0` when the user reaches the end of the collection, completely eliminating `undefined` broken image errors.
*   **Clean and Componentized Code:** Embedded beautifully into the pre-existing portfolio layout without conflicting with previous styles or scripts.

---

## 🛠️ Concepts Applied

### 1. Arrays & Zero-Based Indexing
Stored high-quality image resource pointers into a single contiguous array variable. Managed the data strictly using JavaScript's zero-based coordinate alignment ($0, 1, 2, \dots, n-1$).

### 2. Guarding against `undefined` (Out-of-Bounds Error)
When navigating linearly through an array, going past the maximum index ($length - 1$) returns `undefined`. I implemented a logical firewall:

```javascript
if (currentIndex >= hobbyImages.length) {
    currentIndex = 0; 
}
