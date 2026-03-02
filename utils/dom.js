export function displayPaintings(paintings, gallery) {
    paintings.forEach(painting => {
        const paintingElement = document.createElement('div');
        paintingElement.classList.add('painting');

        const imageElement = document.createElement('img');
        imageElement.src = painting.image;
        imageElement.alt = painting.title;

        const titleElement = document.createElement('h3');
        titleElement.textContent = painting.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = painting.description;

        paintingElement.appendChild(imageElement);
        paintingElement.appendChild(titleElement);
        paintingElement.appendChild(descriptionElement);

        gallery.appendChild(paintingElement);
    });
}