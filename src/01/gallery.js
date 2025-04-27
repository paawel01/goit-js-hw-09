

const createImage = ({ preview, oryginal, description }) => {
    const li = document.createElement("li");
    li.classList.add("gallery-item");
    
    li.innerHTML = 
    `<a class="gallery-link" href="${oryginal}">
        <img 
            class="gallery-image" 
            src="${preview}" 
            alt="${description}" 
            title="${description}"
            />
        </a>`;

    return li;
};

export const initImages = (images) => {
    const imgs = images.map(createImage);
    
    const fragment = document.createDocumentFragment();
    fragment.append(...imgs);
    return fragment;
};
