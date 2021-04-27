const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function() {
    const r2 = sMerah.value;
    const g2 = sHijau.value;
    const b2 = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r2 +','+ g2 +','+ b2 +')'
});

sHijau.addEventListener('input', function() {
    const r2 = sMerah.value;
    const g2 = sHijau.value;
    const b2 = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r2 +','+ g2 +','+ b2 +')'
});

sBiru.addEventListener('input', function() {
    const r2 = sMerah.value;
    const g2 = sHijau.value;
    const b2 = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r2 +','+ g2 +','+ b2 +')'
});