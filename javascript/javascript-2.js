function changeContent(textId, imageId) {
    // Hide all text and image elements
    var textElements = document.querySelectorAll(".crew-information > h1 h2 p");
    var imageElements = document.querySelectorAll(".crew-img > img");
    
    textElements.forEach(function(element) {
        element.style.display = "none";
    });
    
    imageElements.forEach(function(element) {
        element.style.display = "none";
    });
    
    // Show selected text and image elements
    var selectedTextElement = document.getElementById(textId);
    var selectedImageElement = document.getElementById(imageId);
    
    if (selectedTextElement) {
        selectedTextElement.style.display = "block";
    }
    
    if (selectedImageElement) {
        selectedImageElement.style.display = "block";
    }
}