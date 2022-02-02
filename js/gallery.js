const querySelector = document.getElementById('img-grid');

const createListItems = (array) => {
    let html = '';
    for (let i = 0; i < array.length; i++) {
        html +=
            `<li>
              <a class = "thumbnail-img"
                 href = "photos/${i}.jpg"
                 data-caption = "${captionList[i].caption}" >
              <img src = "photos/thumbnails/${i}.jpg" 
                   alt = "${captionList[i].atl}"/>
              </a>
            </li>`;
    }
    return html;
};

querySelector.innerHTML = createListItems(captionList);