
let productos = [
    {id:'1', categoria:'vodka', marca:'absolut', nombre:'Absolut', precio:'$4000', descripcion:'Vodka sabor original', stock:'20', img:'https://i.postimg.cc/RZfBG7D6/abs.png'},
    {id:'2', categoria:'vodka', marca:'absolut', nombre:'Absolut Vanilia', precio:'$4200', descripcion:'Vodka sabor vainilla', stock:'15', img:'https://i.postimg.cc/hvnNLRbZ/absvani.png'},
    {id:'3', categoria:'vodka', marca:'absolut', nombre:'Absolut Watermelon', precio:'$4200', descripcion:'Vodka sabor sandía', stock:'17', img:'https://i.postimg.cc/hGPdVt2Y/absw-ater.png'},
    {id:'4', categoria:'vodka', marca:'absolut', nombre:'Absolut Pears', precio:'$4200', descripcion:'Vodka sabor pera', stock:'25', img:'https://i.postimg.cc/gkNdrHsH/abspears.png'},
    {id:'5', categoria:'vodka', marca:'absolut', nombre:'Absolut Citric', precio:'$4200', descripcion:'Vodka sabor cítrico', stock:'18', img:'https://i.postimg.cc/XN1CRmBw/abscitric.png'},
    {id:'6', categoria:'vodka', marca:'absolut', nombre:'Absolut Raspberry', precio:'$4200', descripcion:'Vodka sabor frambuesa', stock:'23', img:'https://i.postimg.cc/15NGZVGS/absrasp.png'},
    {id:'7', categoria:'vodka', marca:'absolut', nombre:'Absolut Extract', precio:'$4200', descripcion:'Vodka sabor cardamomo', stock:'19', img:'https://i.postimg.cc/NMMTyd7R/absextract.png'},
    {id:'8', categoria:'vodka', marca:'absolut', nombre:'Absolut Mango', precio:'$4200', descripcion:'Vodka sabor mango', stock:'24', img:'https://i.postimg.cc/3wjDqGDw/absmango.png'}
]

export let mockFecht = (id) => {
    
    return new Promise ((res,rej) => {
        setTimeout (() => {
            res(productos)
        },500)
    })
}
