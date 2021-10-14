document.addEventListener('DOMContentLoaded',event =>{
    console.log('DOM ready!');

    window.addEventListener('DOMContentLoaded', async event =>{
        event.preventDefault();

    let url = 'http://api.exchangeratesapi.io/v1/latest?access_key=0d86cb1f834f6e8ad692259802feb8f0';

    const dataRequest = await fetch(url);
    const dataJason = await dataRequest.json();
    //console.log(dataJason);

    const tarifas = dataJason.rates;

    let filtered = tarifas;

    console.log(filtered);

    let moneda_nv = dataJason.rates.CRC;

    console.log(moneda_nv);

    results.innerHTML  = '';

    imprime_moneda_fn(dataJason.rates.AED, 'AED',dataJason.rates.CRC,1,'Dírham de los Emiratos Árabes Unidos');
    imprime_moneda_fn(dataJason.rates.AUD, 'AUD',dataJason.rates.CRC,1,'Dólar australiano');
    imprime_moneda_fn(dataJason.rates.CAD, 'CAD',dataJason.rates.CRC,1,'Dólar canadiense');
    imprime_moneda_fn(dataJason.rates.CDF, 'CDF',dataJason.rates.CRC,1,'Franco congoleño');
    imprime_moneda_fn(dataJason.rates.CDF, 'CDF',dataJason.rates.CRC,1,'Franco congoleño');
    imprime_moneda_fn(dataJason.rates.CHF, 'CHF',dataJason.rates.CRC,1,'Franco Suizo');
    imprime_moneda_fn(dataJason.rates.CNY, 'CNY',dataJason.rates.CRC,1,'Renminbi');
    imprime_moneda_fn(dataJason.rates.EGP, 'EGP',dataJason.rates.CRC,1,'Libra egipcia');
    imprime_moneda_fn(dataJason.rates.CRC, 'EUR',dataJason.rates.CRC,1,'Euro');
    imprime_moneda_fn(dataJason.rates.HKD, 'HKD',dataJason.rates.CRC,1,'Dólar hongkonés');
    imprime_moneda_fn(dataJason.rates.HUF, 'HUF',dataJason.rates.CRC,1,'Forinto húngaro');
    imprime_moneda_fn(dataJason.rates.GBP, 'GBP',dataJason.rates.CRC,1,'Libra esterlina');  
    imprime_moneda_fn(dataJason.rates.GIP, 'GIP',dataJason.rates.CRC,1,'La libra de Gibraltar');   
    imprime_moneda_fn(dataJason.rates.JPY, 'JPY',dataJason.rates.CRC,1,'Yen japonés');
    imprime_moneda_fn(dataJason.rates.LBP, 'LBP',dataJason.rates.CRC,1,'Libra libanesa');
    imprime_moneda_fn(dataJason.rates.LTL, 'LTL',dataJason.rates.CRC,1,'Lituania');
    imprime_moneda_fn(dataJason.rates.MXN, 'MXN',dataJason.rates.CRC,1,'Peso Mexicano');
    imprime_moneda_fn(dataJason.rates.NZD, 'NZD',dataJason.rates.CRC,1,'Dólar neozelandés');
    imprime_moneda_fn(dataJason.rates.MOP, 'MOP',dataJason.rates.CRC,1,'Pataca macanesa');
    imprime_moneda_fn(dataJason.rates.OMR, 'OMR',dataJason.rates.CRC,1,'Rial');
    imprime_moneda_fn(dataJason.rates.SGD, 'SDG',dataJason.rates.CRC,1,'Dólar de Singapur');
    imprime_moneda_fn(dataJason.rates.USD, 'USD',dataJason.rates.CRC,1,'Dólar estadounidense');

    imprime_moneda_fn(dataJason.rates.WST, 'WST',dataJason.rates.CRC,1,'Samoan Tālā');
    imprime_moneda_fn(dataJason.rates.XAF, 'XAF',dataJason.rates.CRC,1,'Franco CFA BEAC centroafricano');
    imprime_moneda_fn(dataJason.rates.XAU, 'XAU',dataJason.rates.CRC,1,'Onza de oro');
    imprime_moneda_fn(dataJason.rates.YER, 'YER',dataJason.rates.CRC,1,'Rial yemení');
    imprime_moneda_fn(dataJason.rates.ZAR, 'ZAR',dataJason.rates.CRC,1,'Rand sudafricano');
    imprime_moneda_fn(dataJason.rates.ZWL, 'ZWL',dataJason.rates.CRC,1,'Dólar zimbabuense');


    function imprime_moneda_fn(valor_np,moneda_vp,colon_np,base_np,nombre_vp) {
        
        console.log(moneda_vp);

        let resultado = (base_np/valor_np)*colon_np;

        if (moneda_vp == 'EUR') {
            resultado =  colon_np;   
        }
        
        const li = document.createElement('li');
        let pr = document.createElement('p');
        pr.innerHTML = moneda_vp + ' - ' + nombre_vp;
        li.appendChild(pr);
        results.appendChild(li);
        let pr2 = document.createElement('p');
        pr2.innerHTML += `${resultado.toFixed(4)}`;
        li.appendChild(pr2);
        results.appendChild(li);


        }

    });



});