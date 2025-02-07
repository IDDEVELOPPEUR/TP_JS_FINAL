function nouVille() {  
    const input = document.getElementById('entreVille');  
    const ville = input.value.trim();  
    if (ville) {  
        const li = document.createElement('li')
        li.textContent = ville;  
        li.onclick = function() { selectVille(this); } 
        document.getElementById('listeVilles').appendChild(li) 
       
    } else {  
        alert("Entrer une ville !")
    }  
}  

function selectVille(element) {  
    element.classList.toggle('selected')   
}  

function supVille() {  
    const villes = document.querySelectorAll('#listeVilles li.selected');  
    villes.forEach(function(ville) {  
        ville.remove();  
    });  
}