
const fridge = document.getElementById('fridge');


function createCard(imageUrl, altText, captionText) {
    const figure = document.createElement('figure'); 
    const img = document.createElement('img');       
    const caption = document.createElement('figcaption'); 

    img.src = imageUrl;
    img.alt = altText;
    caption.textContent = captionText;

    figure.appendChild(img);
    figure.appendChild(caption);
    fridge.appendChild(figure); 
}


document.getElementById('fish').addEventListener('click', () => {
    createCard(
        'https://github.com/Onsshuk2/HTML/blob/main/icons_hw_module_3/Food_C205-128.png?raw=true',
        'Fish',
        'Fish'
    );
});

document.getElementById('apple').addEventListener('click', () => {
    createCard(
        'https://github.com/Onsshuk2/HTML/blob/main/icons_hw_module_3/Food_C240-128.png?raw=true',
        'Apple',
        'Apple'
    );
});

document.getElementById('egg').addEventListener('click', () => {
    createCard(
        'https://github.com/Onsshuk2/HTML/blob/main/icons_hw_module_3/Food_C203-128.png?raw=true',
        'Eggs',
        'Eggs'
    );
});

console.log("Script loaded successfully.");
