 
function calculer() {  
    var premierNombre = parseFloat(document.querySelector("#premier-nombre").value);  
    var deuxiemeNombre = parseFloat(document.querySelector("#deuxieme-nombre").value);  
    var operateur = document.querySelector("#operateur").value;  
   
    
    switch (operateur) {  
        case "+":  
            resultat = premierNombre + deuxiemeNombre;  
            break;  
        case "-":  
            resultat = premierNombre - deuxiemeNombre;  
            break;  
        case "*":  
            resultat = premierNombre * deuxiemeNombre;  
            break;  
        case "/":  
            if (deuxiemeNombre === 0) {  
                alert("On ne peut pas diviser par 0");  
                return;  
            }  
            resultat = premierNombre / deuxiemeNombre;  
            break;  
        default:  
            alert("Veillez selectionner un operateur SVP !");  
            return;  
    }  

    // J'affiche le résultat dans le champ "resultat"  
    document.querySelector("#resultat").value = resultat;  
}  
