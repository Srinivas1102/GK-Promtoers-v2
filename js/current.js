fetch('/js/current.json')
    .then(response => response.json())
    .then(data => {
        const currentImages = data.currentImages;
        function renderImages() {
            const currentImageRow = document.getElementById("imageRow");
            let html = '';

            currentImages.forEach((currentImage) => {
                html += `<div class=" builder_item ">
                            <a href="${currentImage.href}">
                                <img src="${currentImage.url}" alt="${currentImage.alt}"  >
                            </a>
                         </div>`;
            });

            currentImageRow.innerHTML = html;
        }

        // Call the renderImages function when the page loads
        window.addEventListener('load', renderImages);
    })
    .catch(error => console.error('Error:', error));