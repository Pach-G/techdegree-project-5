const images = document.getElementById('img-grid');

const createListItems = (array) => {
    let html = '';
    for (let i = 0; i < array.length; i++) {
        html +=
            `<li>
              <a class = "thumbnail-img"
                 href = "images/${i}.jpg"
                 data-caption = "${array[i].caption}" >
              <img src = "images/thumbnails/${i}.jpg" 
                   alt = "${array[i].atl}"/>
              </a>
            </li>`;
    }
    return html;
};

images.innerHTML = createListItems(captionList);