(function() {
    const imageContainer = document.querySelector('.image-container');
    const image = document.querySelector('#image');
    const imgBtn = document.querySelector('#imgBtn');

    async function getImg(){
        const url = 'https://dog.ceo/api/breeds/image/random';
        const response = await fetch(url);
        const data = await response.json();
        return data.message;
    }

    imgBtn.addEventListener('click', async () => { 
        const data = await getImg();
        image.src = data;
    });
})();