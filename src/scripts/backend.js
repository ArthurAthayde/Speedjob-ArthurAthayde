function renderCard(array){

    let main = document.querySelector('main');
    let backContainer = document.createElement('section');
    let backTitle = document.createElement('h3');
    let ulItens = document.createElement('ul');

    main.classList.add('main__container');
    backContainer.classList.add('frontend__container');
    backTitle.innerText = 'Backend Jobs';
    ulItens.classList.add('frontend__itens');

    backContainer.append(backTitle, ulItens);         
    main.append(backContainer);

    for (let i = 0; i < array.length; i++){

        let vaga = array[i];

        let cardItens = document.createElement('li');
        let cardHeader = document.createElement('div');
        let cardIcon = document.createElement('img');
        let cardTitle = document.createElement('h2');
        let cardLocal = document.createElement('span');
        let cardDescription = document.createElement('p');
        let cardTags = document.createElement('ul');

        cardItens.classList.add('frontend__card');
        cardItens.id = vaga.id;

        cardHeader.classList.add('frontend__header');
        

        cardIcon.classList.add('frontend__card-icon');
        cardIcon.src = 'src/assets/icon.png';
        // cardIcon.src = 'https://cdn-icons-png.flaticon.com/512/625/625176.png';

        cardTitle.classList.add('frontend__card-title');
        cardTitle.innerText = vaga.title;

        cardLocal.classList.add('frontend__card-local');
        cardLocal.innerText = 'Curitiba - Paraná';

        cardDescription.classList.add('frontend__card-description');
        cardDescription.innerText = vaga.descrription;

        cardTags.classList.add('frontend__tags-list');

        cardHeader.append(cardIcon, cardTitle, cardLocal);
        cardItens.append(cardHeader, cardDescription, cardTags);

       
        for (let j = 0; j < vaga.modality.length; j++){
            let vagaModalidade = vaga.modality[j];

            let vagaTag = document.createElement('li');
            vagaTag.classList.add('frontend__tags-itens');
            vagaTag.innerText = vagaModalidade;

            cardTags.appendChild(vagaTag);
        }

        ulItens.appendChild(cardItens);  
  
    }

}

renderCard(backEndJobs);
