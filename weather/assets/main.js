const weatherAPI =
    'http://api.weatherapi.com/v1/current.json?key=633ca3304da840caa5e182246232106&aqi=no';
const keyword = document.querySelector('.keyword');
const btnSearch = document.querySelector('.btn-search');

const isi = document.getElementById('isi')

btnSearch.onclick = () => {
    fetch(`${weatherAPI}&q=${keyword.value}`)
        .then((res) => res.json())
        .then((data) => {
            let element = ''

            element = showElement(data)

            isi.innerHTML = element;
        });
};

function showElement(data) {
    return `<h1>${data.location.name}, ${data.location.region}, ${data.location.country}</h1>
    <center><img src="${data.current.condition.icon}"></center>
        <h5>${data.current.temp_c}°c</h5>
        <div class:"kondisi">
        <p>condition : ${data.current.condition.text}</p>
        <p>humidity : ${data.current.humidity}</p>
        </div>
        <p><center>${data.location.localtime}</center></p>`
};