import SimpleLightbox from "simplelightbox";

import { images } from "./images";

/*
     {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
        description: 'Hokkaido Flower',
      },
*/  

const createImage = ({ preview, oryginal, description }) => {
    const li = document.createElement("li");
    li.classList.add("gallery-item");
    const HTML = 
    `<a class="gallery-link" href="${oryginal}">
		<img 
			class="gallery-image" 
			src="${preview}" 
			alt="${description}" 
			/>
	    </a>`;

    return li;
};

const initImages = (images) => {
    const imgs = images.map(createImage);
    
    const fragment = document.createDocumentFragment();
    fragment.append(...imgs);
    return fragment;
};

const main = () => {
    document.querySelector(".gallery").appendChild(initImages(images));
};

main()

const lightbox = new SimpleLightbox("ul.gallery li", {
    captionType: "alt"
 });