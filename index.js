let input = document.querySelector('input');
let searchButton = document.querySelector('button');


searchButton.addEventListener('click', async (e) =>{
    e.preventDefault();
    let countryName = input.value;
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    let res = await fetch(url);
    let data = await res.json();
    document.getElementById('main').classList.remove('hide');
    document.getElementById('flag').src = data[0].flags.svg;
    document.getElementById('flag').alt = data[0].flags.alt;
    document.getElementById('country').innerText = data[0].name.common;
    document.getElementById('official').innerText = `Official Name : ${data[0].name.official}`;
    document.getElementById('currency').innerText = `Currency : ${data[0].currencies[Object.keys(data[0].currencies)].symbol} ${data[0].currencies[Object.keys(data[0].currencies)].name}`;
    document.getElementById('capital').innerText = `Capital : ${data[0].capital}`;
    document.getElementById('independance').innerText = `Is Independent : ${data[0].independent}`;
    document.getElementById('Region').innerText = `Region: ${data[0].region}`;
    document.getElementById('Area').innerText = `Area of Country: ${data[0].area} square km`;
    document.getElementById('un-member').innerText = `UN Member: ${data[0].unMember}`;
    document.getElementById('languages').innerText = `Languages: ${Object.values(data[0].languages)}`;
    document.getElementById('population').innerText = `Population: ${data[0].population}`;
    document.getElementById('timezones').innerText = `Timezones: ${Object.values(data[0].timezones)}`;
});

document.addEventListener('keydown', (e) =>{
    if(e.key === 'Enter'){
        searchButton.click();
    }
})