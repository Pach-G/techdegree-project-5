const captionList = [
    ["Bales", "I love hay bales. Took this snap on a drive through the countryside past some" +
    " straw fields."],
    ["Lake", "The lake was so calm today. We had a great view of the snow on the mountains from" +
    " here."],
    ["Canyon", "I hiked to the top of the mountain and got this picture of the canyon and trees" +
    " below."],
    ["Iceberg", "It was amazing to see an iceberg up close, it was so cold but didn't snow today."],
    ["Desert", "The red cliffs were beautiful. It was really hot in the desert but we did a lot" +
    " of walking through the canyons."],
    ["Fall", "Fall is coming, I love when the leaves on the trees start to change color."],
    ["Plantation", "I drove past this plantation yesterday, everything is so green!"],
    ["Dunes", "My summer vacation to the Oregon Coast. I love the sandy dunes!"],
    ["Countryside", "We enjoyed a quiet stroll down this countryside lane."],
    ["Sunset", "Sunset at the coast! The sky turned a lovely shade of orange."],
    ["Cave", "I did a tour of a cave today and the view of the landscape below was breathtaking."],
    ["Bluebells", "I walked through this meadow of bluebells and got a good view of the snow on" +
    " the mountain before the fog came in."]
];

const querySelector = document.querySelector('ul');
const createListItems = (array) => {
    let html = '';
    for (let i = 0; i < array.length; i++) {
        html +=
            `<li>
              <a class = "thumbnail-img"
                 href = "photos/${i}.jpg"
                 data-caption = "${captionList[i][1]}" >
              <img src = "photos/thumbnails/${i}.jpg" 
                   alt = "${captionList[i][0]}"/>
              </a>
            </li>`;
    }
    return html;
};

querySelector.innerHTML = createListItems(captionList);