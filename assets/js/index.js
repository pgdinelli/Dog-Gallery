(function () {
    const image = document.querySelector('#image');
    const imgBtn = document.querySelector('#imgBtn');
    const breed = document.querySelector('#breed');
    const catsBtn = document.querySelector('#catsBtn');

    async function getImg() {
        try {
            const url = 'https://dog.ceo/api/breeds/image/random';
            const response = await fetch(url);
            const data = await response.json();
            return data.message;
        } catch {
            breed.textContent = `Erro ao pegar imagem`;
            return;
        }
    }

    function displayDogData(data) {
        image.src = data;
        breed.textContent = data.split('/')[4];
    }

    function displayCatData(data) {
        image.src = data[0].url;
        breed.textContent = data[0].breeds[0].name;
    }

    imgBtn.addEventListener('click', async () => {
        try {
            const data = await getImg();
            displayDogData(data);
        } catch (error) {
            return error;
        }
    });

    catsBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('http://localhost:3000/');
            const data = await response.json();
            displayCatData(data);
        } catch (error) {
            return error;
        }
    });

})();