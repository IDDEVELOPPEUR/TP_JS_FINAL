 
function calculer() {  
    var premierNombre = parseFloat(document.querySelector("#premier-number").value);  
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
                alert("Division par zéro!");  
                return;  
            }  
            resultat = premierNombre / deuxiemeNombre;  
            break;  
        default:  
            alert("Opérateur inconnu!");  
            return;  
    }  

    // J'affiche le résultat dans le champ "resultat"  
    document.querySelector("#resultat").value = resultat;  
}  
