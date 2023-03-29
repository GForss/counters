let cold = {
    currentCold: document.querySelector('.current-cold'),
    pastCold: document.querySelector('.past-cold'),
    btn: document.querySelector('.cold-btn'),
    displau: document.querySelector('.cold-water__result'),
    rates: Number(50.93)
}

cold.btn.addEventListener('click', calculationCold);

function calculationCold() {
    if(cold.currentCold.value > cold.pastCold.value) {
        alert('Ошибка: нынешние показания не могуть быть меньше прошлых!');
    } else {
        cold.displau.innerHTML = `Вы должны оплатить ${(cold.pastCold.value - cold.currentCold.value) * cold.rates} рублей`;
    }
    
    displauCapibara();
}


let hot = {
    currentHot: document.querySelector('.current-hot'),
    pastHot: document.querySelector('.past-hot'),
    btn: document.querySelector('.hot-btn'),
    displau: document.querySelector('.hot-water__result'),
    rates: Number(243.16)
}

hot.btn.addEventListener('click', calculationHot);

function calculationHot() {
    if(hot.currentHot.value > hot.pastHot.value) {
        alert('Ошибка: нынешние показания не могуть быть меньше прошлых!');
    } else {
        hot.displau.innerHTML = `Вы должны оплатить ${(hot.pastHot.value - hot.currentHot.value) * hot.rates} рублей`;
    }

    displauCapibara();
}


let light = {
    currentLight: document.querySelector('.current-light'),
    pastLight: document.querySelector('.past-light'),
    btn: document.querySelector('.light-btn'),
    displau: document.querySelector('.light__result'),
    rates: Number(6.43),
}

light.btn.addEventListener('click', calculationLight);

function calculationLight() {
    if(light.currentLight.value > light.pastLight.value) {
        alert('Ошибка: нынешние показания не могуть быть меньше прошлых!');
    } else {
        light.displau.innerHTML = `Вы должны оплатить ${(light.pastLight.value - light.currentLight.value) * light.rates} рублей`;
    }    

    displauCapibara();
}


let itog = {
    button: document.querySelector('.all-money__button'),
    displau: document.querySelector('.all-money__text')
}

itog.button.addEventListener('click', result)

function result() {
    let summ = ((cold.pastCold.value - cold.currentCold.value) * cold.rates) + ((hot.pastHot.value - hot.currentHot.value) * hot.rates) + ((light.pastLight.value - light.currentLight.value) * light.rates);

    itog.displau.innerHTML = `Всего вы должны оплатить ${summ}`;
}


let keeping = {
    cold: document.querySelector('.indications__cold-water_li'),
    hot: document.querySelector('.indications__hot-water_li'),
    light: document.querySelector('.indications__light_li'),
    button: document.querySelector('.indications__button')
}

keeping.button.addEventListener('click', storage)

    let coldNumbers = [];
    let hotNumbers = [];
    let lightNumbers = [];

      
        if (localStorage.getItem('cold')) {
            coldNumbers = JSON.parse(localStorage.getItem('cold'));
            displauMessages();
        }  
        if (localStorage.getItem('hot')) {
            hotNumbers = JSON.parse(localStorage.getItem('hot'));
            displauMessages();
        }  
        if (localStorage.getItem('light')) {
            lightNumbers = JSON.parse(localStorage.getItem('light'));
            displauMessages();
        }  


function storage() {

    coldNumbers.push(cold.pastCold.value);
    hotNumbers.push(hot.pastHot.value);
    lightNumbers.push(light.pastLight.value);

    displauMessages();

    localStorage.setItem('cold', JSON.stringify(coldNumbers));
    localStorage.setItem('hot', JSON.stringify(hotNumbers));
    localStorage.setItem('light', JSON.stringify(lightNumbers));

}


function displauMessages() {
    let displauCold = '';
    let displauHot = '';
    let displauLight = '';

    coldNumbers.forEach(function(item, i){
        displauCold += `<li>${item}</li>`;
        keeping.cold.innerHTML = displauCold;
    });
    hotNumbers.forEach(function(item, i){
        displauHot += `<li>${item}</li>`;
        keeping.hot.innerHTML = displauHot;
    });
    lightNumbers.forEach(function(item, i){
        displauLight += `<li>${item}</li>`;
        keeping.light.innerHTML = displauLight;
    });
}

let clear = document.querySelector('.clear');

clear.addEventListener('click', cleaners);
function cleaners() {
    localStorage.clear();
    if(localStorage.length === 0)
       keeping.cold.innerHTML = '';
       keeping.hot.innerHTML = '';
       keeping.light.innerHTML = '';
}


let capibara = document.querySelector('.capibara')

function displauCapibara() {
    if(cold.pastCold.value - cold.currentCold.value >= 4 || hot.pastHot.value - hot.currentHot.value >= 4) {
        capibara.classList.add("capibara_display");
    } else {
        capibara.classList.remove("capibara_display");
    }
}
