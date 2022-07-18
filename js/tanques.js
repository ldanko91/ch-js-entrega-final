class Tanque{
    constructor(rubro,id,nombre, precio){
        this.rubro =rubro;
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        
    }
}
const tanques = [];
tanques.push(new Tanque('Tanques','500bcp','Tanque 500 lts bicapa',9000));
tanques.push(new Tanque('Tanques','500tcp','Tanque 500 lts tricapa',12000));
tanques.push(new Tanque('Tanques','750bcp','Tanque 750 lts bicapa',12000));
tanques.push(new Tanque('Tanques','750tcp','Tanque 750 lts tricapa',16000));
tanques.push(new Tanque('Tanques','1000bcp','Tanque 1000 lts bicapa',16000));
tanques.push(new Tanque('Tanques','1000tcp','Tanque 1000 lts tricapa',20000));

const tanquesJson = JSON.stringify(tanques)

localStorage.setItem("rubroTanques", tanquesJson)

class Vanitory{
    constructor(rubro,id,nombre, precio){
        this.rubro = rubro;
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        
    }
}
const vanitorys = [];
vanitorys.push(new Vanitory('Vanitorys','50std','Vanitory standard 50cm',14000));
vanitorys.push(new Vanitory('Vanitorys','60std','Vanitory standard 60cm',16500));
vanitorys.push(new Vanitory('Vanitorys','50mar','Vanitory Maral 50cm',16000));
vanitorys.push(new Vanitory('Vanitorys','60mar','Vanitory Maral 60cm',18500));
vanitorys.push(new Vanitory('Vanitorys','60par','Vanitory Paraiso 60cm',20000));
vanitorys.push(new Vanitory('Vanitorys','80par','Vanitory Paraiso 80cm',25000));

const vanitorysJson = JSON.stringify(vanitorys)

localStorage.setItem("rubroVanitorys", vanitorysJson)