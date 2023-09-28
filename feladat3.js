const lista = [];

document.addEventListener("DOMContentLoaded", () => {
const urlap = document.forms["nevezesi_lap"];
urlap.addEventListener("submit", (event) => {
    event.preventDefault();

    const nev = urlap["nev"].value;
    const tkv = urlap["tkv"].value; 
    const szulDat = urlap["szulDat"].value;
    const fajta = urlap["fajta"].value;
    const neme = urlap["neme"].value;
    const oszt = urlap["oszt"].value;
    const tul = urlap["tul"].value;
    const email = urlap["email"].value;
    const belepo = urlap["belepo"].value;
    const velemeny = urlap["velemeny"].value;

    let igaz = true;

    if (nev.length < 5 || nev.length > 30) {
        alert("A törzskönyvi névnek 5 és 30 karakter között kell lennie!"); 
        igaz = false; // vagy return
    
    }
// kis, nagy , bontas, / szam
    
  //var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  chates
   
    if (tkv.length < 5 || nev.length > 30) {
        alert("A törzskönyvi száma/jele minmum 7 karakter!");  
        igaz = false; 
    
    }

    if (fajta.length == 0 ) {
        alert("A kutya fajtája nincs kiválasztva!");  
        igaz = false; 
    
    }

    if (neme.length == 0 ) {
        alert("A kutya neme nincs kiválasztva!");  
        igaz = false; 
    
    }

    if (oszt.length == 0 ) {
        alert("A nevezésiosztály nincs kiválasztva!");  
        igaz = false; 
    
    }
// kis, nagy , bontas, / kér tag min
    if (tul.length < 5 || nev.length > 30) {
        alert("A névnek 5 és 30 karakter között kell lennie!");  
        igaz = false; 
    
    }
// megnézni!!! . utáni nincs benne!!!!!! **** var vagy const???? var ((!email.match(emailRegex))???)
    
    const email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //Bencéjé
    if (!email_regex.test(email)) {
        alert("Az email cím nem megfelelő!");  
        igaz = false; 
    }
//**************************         
   //var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  chates
    //if (!email.match(emailRegex)) {
   

    //const jelszo_regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/;
    //if (!jelszo_regex.test(jelszo))
    
    //const nev_regex = ?????????
   
    
// jelszó kis nagy speciális

/*
    const jelszo_regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/;
    if (!jelszo_regex.test(jelszo)) {
        alert("A jelszónak tartalmaznia kell legalább egy: kisbetűt, nagybetűt, számot és speciális karaktert");
        helyes = false;
    }

    if (jelszo !== jelszo_megerosit) {
        alert("A jelszavaknak egyeznie kell")
        helyes = false
    }
    
*/
    if (belepo.length == 0 ) {
    alert("Az igényelt belépők száma nincs kiválasztva!");  
    igaz = false; 
    
    }
    
    if (velemeny.length == 0 ) {
    alert("A vélemény mező nincs kiválasztva!");  
    igaz = false; 
    
    }

    if (igaz) {
        const adatok = {
            nev: nev,
            tkv: tkv,
            szulDat : szulDat,
            fajta : fajta,
            neme : neme,
            oszt : oszt,
            tul : tul,
            email : email,
            belepo : belepo,
            oszt : oszt//,
                        
        }//;
        lista.push(adatok);
        console.log(lista);
    }
});
});


