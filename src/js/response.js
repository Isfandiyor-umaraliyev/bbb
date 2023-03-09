const cardsEl = document.querySelector("#response__item");

export const createResponse = (items) => {
    items.forEach((item) => {
        const name = item.word;
        const spech = item.phonetics[1].text;
        const link = item.phonetics[1].audio;
        const noun = item.meanings[0].partOfSpeech;
        const def = item.meanings[2].definitions[0].definition;
        const def1 = item.meanings[2].definitions[1].definition;
        const def2 = item.meanings[2].definitions[2].definition;
        const synonum = item.meanings[0].synonyms;
        const verb = item.meanings[1].partOfSpeech;
        const vdef = item.meanings[1].definitions[0].definition;
        const vdef1 = item.meanings[2].definitions[4].definition;
        const sourceUrls = item.sourceUrls;

        cardsEl.innerHTML = `
        <div class="response__item-header">
        <div class="response_play">
            <h1 class="response__word">${name}</h1>
            <button id="play" class="play">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" class="playSvg"><g fill="#A445ED" fill-rule="evenodd"><circle class="s"  cx="37.5" cy="37.5" r="37.5" /><path d="M29 27v21l21-10.5z" /></g></svg>
            </button>
        </div>
        <div class="read">
          ${spech}
        </div>
    </div>
    <div class="response__item-body">
        <div class="response__item__body_wrapper">
            <h3 class="response__item-title">${noun}</h3>
            <hr class="linee">
        </div>
        <ul class="description">Meaning
            <li class="description1 descriptionn">
               ${def}
            </li>
            <li class="description2 descriptionn">
              ${def1}
            </li>
            <li class="description3 descriptionn">
              ${def2}
            </li>
        </ul>
        <div class="synonum">
            <p class="synonum_title">Synonyms</p>
            <p class="synonum_response">${synonum}</p>
        </div>
    
    
    
        <ul class="verb">
            <div class="response__item__body_wrapper">
                <h3 class="response__item-title">${verb}</h3>
                <hr class="linee">
            </div>
            <li class="verb1">
               ${vdef}
                <p class="verb_response">
${vdef1}
                </p>
            </li>
    
        </ul>
        <hr>
    
        <div class="body__footer">
    
            <div class="source">Source</div>
            <a class="wikpedia" target="blank" href=${sourceUrls}>${sourceUrls}<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"/></svg></a>
        </div>
    </div>
        `;


        console.log(item);
        const play = document.getElementById("play");
        play.addEventListener("click", (e) => {
            e.preventDefault();
            const crash = new Audio(`${link}`);
            crash.play();
        });
    });
};

// console.log(1);