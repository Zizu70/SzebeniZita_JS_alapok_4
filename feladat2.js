const lista = [];

document.addEventListener("DOMContentLoaded", () => {
    const urlap = document.forms["regisztracios_urlap"];
    urlap.addEventListener("submit", (event) => {
        event.preventDefault();
       
        const nev = urlap["nev"].value;
        const jelszo1 = urlap["jelszo1"].value;        
        const jelszo2 = urlap["jelszo2"].value;       
        const email = urlap["email"].value;
        const szuletesiDatum = urlap["szuletesiDatum"].value;
 
        let igaz = true;

        if (nev.length < 5 || nev.length > 16) {
            alert("A felhasználónévnek 5 és 16 karakter között kell lennie."); 
            igaz = false;
        }

        if (jelszo1 !== jelszo2) {
            alert("A jelszavak eltérnek!"); 
            igaz = false;
        }

        if (jelszo1.length < 5) {
            alert("A jelszó minmum 5 karakter!");  
            igaz = false;
        }

            var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
        if (!email.match(emailRegex)) {
            alert("Az email cím nem megfelelő formátumú."); 
            igaz = false;
        }
       
        if (igaz) {
            const adatok = {
                nev: nev,
                jelszo1: jelszo1,
                jelszo2: jelszo2,                
                email: email,
                szuletesiDatum: szuletesiDatum
                
            };
            lista.push(adatok);
            console.log(lista);
        }
    });
});


