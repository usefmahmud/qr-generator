//@ts-ignore
var qrcode = new QRCode("qrcode");
const text = document.getElementById('text')
const download = document.getElementById('download')

text.addEventListener('keyup', (e) => {

    //@ts-ignore
    if(e.target.value != ''){
        const image = document.querySelector('.qrcode > img')

        //@ts-ignore
        qrcode.makeCode(e.target.value);

        download.style.display = 'block'
        download.setAttribute('href', image.getAttribute('src'))
    }
    
})

