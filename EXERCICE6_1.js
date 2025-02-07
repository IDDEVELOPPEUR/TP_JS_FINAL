class eleve {

    static numero=0;
    constructor(prenom,nom,courier)
    {

    
    this.prenom=prenom
    this.nom=nom
    this.numero+=1;
    this.ddn=new Date()
    this.courier=courier
    this.note=[]
    };

     age()
    {
//année de naissance =aN et aC = année courante
         let aN=this.ddn.getFullYear();

        let aC= Number((new Date().getFullYear()))

        return aN-aC 
    }

     affiche()
    {
// date de naissance doit etre separer par un // pour le jour , le mois et l'année

        return "Prénom: "+this.prenom+ "\nNom: "+this.nom.toUpperCase()+"\nDate de naissance:"+this.ddn.getDate()+'//'+(this.ddn.getMonth()+1)+'//'+this.ddn.getFullYear();
    };

     ajoutNote(matiere,note)
    {
       let obj=
       {
            mat:matiere,
            not:note,
       }
       this.note.push(obj);
    }

     moyenne()
    {
        let som=0;
        let t=this.note.length;
    
        for (let i = 0; i < t; i++) {
            som+=this.note[i].not       
        }
       
       let  moy=som/t;
        return moy;
    }
    rechercheEleve(tabEleve,chaine)
    {
        let eleveTrouves=[]
        t =tabEleve.length
        for (let i = 0; i < t; i++) {
            let prR=tabEleve[i].prenom.toUpperCase()
            let nR=tabEleve[i].nom.toUpperCase()
            let chR=chaine.toUpperCase()
            if(prR.includes(chR) || nR.includes(chR)){ 
                eleveTrouves.push(tabEleve[i])
        }
    }
    console.log("les eleveTrouves: \n");
    for (let i = 0; i < eleveTrouves.length; i++) {
        
        console.log(eleveTrouves[i].affiche());
        
    }
    }
    anniMois(tabEleve,numMois){
        let Anni=[]
       let t =tabEleve.length
        for (let i = 0; i < t; i++) {
            if((tabEleve[i].ddn.getMonth()+1)==numMois){
            Anni.push(tabEleve[i])
        }
    }
        console.log(Anni);
    }
    }