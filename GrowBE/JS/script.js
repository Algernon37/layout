document.addEventListener("DOMContentLoaded", function() {
    const maxLength = 100; // Максимальная длина текста
    const ellipsis = " ..."; // Строка с многоточием

    const featuresTextElements = document.querySelectorAll(".features__text");

    featuresTextElements.forEach(textElement => {
        const fullText = textElement.textContent;
        if (fullText.length > maxLength) {
            const truncatedText = fullText.substring(0, maxLength) + ellipsis;
            const readMoreLink = document.createElement("a");
            readMoreLink.href = "#";
            readMoreLink.textContent = "Read More...";
            readMoreLink.addEventListener("click", function(event) {
                event.preventDefault();
                textElement.textContent = fullText;
                readMoreLink.style.display = "none"; 
            });

            const readMoreWrapper = document.createElement("div");
            readMoreWrapper.appendChild(readMoreLink);

            textElement.textContent = truncatedText;
            textElement.insertAdjacentElement("afterend", readMoreWrapper);
        }
    });
});

