const generateBtn = document.querySelector('#generateBtn');
const gridContainer = document.querySelector('#gridContainer');

generateBtn.addEventListener('click', () => {

    const numberOfImages = 5;


    for (let i = 0; i < numberOfImages; i++) {
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        const imgUrl = `https://picsum.photos/500?random=${randomNumber}`;

        const img = document.createElement('img');
        img.src = imgUrl;

        gridContainer.appendChild(img);
    }
});
