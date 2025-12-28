(function () {
    const image = document.querySelector('#image');
    const dogsBtn = document.querySelector('#dogsBtn');
    const breed = document.querySelector('#breed');
    const catsBtn = document.querySelector('#catsBtn');

    function displayDogData(data) {
        image.src = data;
        breed.textContent = data.split('/')[4];
    }

    function displayCatData(data) {
        image.src = data[0].url;
        breed.textContent = data[0].breeds[0].name;
    }

    dogsBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('https://animalsgallery-backend.vercel.app/dog');
            const data = await response.json();
            displayDogData(data.message);
        } catch (error) {
            breed.textContent = 'Erro ao mostrar imagem do cachorro';
            image.src = '';
        }
    });

    catsBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('https://animalsgallery-backend.vercel.app/cat');
            const data = await response.json();
            displayCatData(data);
        } catch (error) {
            breed.textContent = 'Erro ao mostrar imagem do gato';
            image.src = '';
        }
    });

})();