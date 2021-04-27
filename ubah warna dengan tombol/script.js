const tBiruMuda = document.getElementById('tBiruMuda');
tBiruMuda.onclick = function() {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}


const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tAcakWarna.style.marginLeft = '10px';
tBiruMuda.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});