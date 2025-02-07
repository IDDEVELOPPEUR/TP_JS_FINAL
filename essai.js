<!DOCTYPE html>  
<html lang="fr">  
<head>  
    <script src="EXERCIECE6_3.js"></script>
    <link rel="stylesheet" href="EXERCIECE6_3.css">
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Calculatrice</title>  
    <link rel="stylesheet" href="styles.css">  
</head>  
<body>  
     
    <div class="calculatrice">  
        <h1>CALCULATRICE</h1>
        <input type="number" id="premier-nombre" placeholder="Premier nombre">  
        <input type="number" id="deuxieme-nombre" placeholder="Deuxième nombre">  
        
        <select id="oper">  
            <option id="add"  value="+">Addition</option>  
            <option id="sous" value="-">Soustraction</option>  
            <option id="mult" value="*">Multiplication</option>  
            <option id="div" value="/">Division</option>  
        </select>  

        <button id="mon-bouton" onclick="calculer()">Calculer</button>  
        <input type="text" id="resultat" placeholder="Résultat" >  
    </div>  


</body>  
</html>