let inputs = document.querySelectorAll(".valor");

let url = 'http://api.exchangeratesapi.io/v1/latest?access_key=0d86cb1f834f6e8ad692259802feb8f0';

fetch(url)
  .then(r => r.json())
  .then(data => {
    document.querySelector('#USD')
      .dataset.cambio = data.rates.USD;
    document.querySelector('#GBP')
      .dataset.cambio = data.rates.GBP;  
    document.querySelector('#CRC')
      .dataset.cambio = data.rates.CRC;
    document.querySelector('#EUR')
      .dataset.cambio = data.rates.EUR;

    inputs.forEach(input => {
      input.value = input.dataset.cambio;
    });
  })
  .catch(error => console.error(error))

function cambiaMoneda(input) {
  let factor = input.value / input.dataset.cambio;
  inputs.forEach(campo => {
    campo.value = (campo.dataset.cambio * factor).toFixed(4);
  })
}