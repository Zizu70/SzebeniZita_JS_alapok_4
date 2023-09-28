document.getElementById('gomb').addEventListener('click', function () {
    const szoveg = document.getElementById('szoveg').value;
    
    const atalakitas = document.querySelector('input[name="atalakitas"]:checked');

    if (!szoveg || !atalakitas) {
        alert('Kérjük, töltse ki a szöveg mezőt és válassza ki a konvertálási típust!');
        return;
    }

    const forditott = convertText(szoveg, atalakitas.value);
    alert('A szöveg átalakítva: ' + forditott);
});

function convertText(text, type) {
    if (type === 'lower') {
        return text.toLowerCase();
    } else {
        return text.toUpperCase();
    }
}