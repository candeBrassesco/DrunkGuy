
let productos = [
    {id:'1', categoria:'vodka', marca:'absolut', nombre:'Absolut', precio:'$4000', descripcion:'Vodka sabor original', graduacion:'40% ALC/VOL', medida:'750 ml', stock:'20', img:'https://i.postimg.cc/RZfBG7D6/abs.png'},
    {id:'2', categoria:'vodka', marca:'absolut', nombre:'Absolut Vanilia', precio:'$4200', descripcion:'Vodka sabor vainilla', graduacion:'38% ALC/VOL', medida:'750 ml', stock:'15', img:'https://i.postimg.cc/hvnNLRbZ/absvani.png'},
    {id:'3', categoria:'vodka', marca:'absolut', nombre:'Absolut Watermelon', precio:'$4200', descripcion:'Vodka sabor sandía', graduacion:'38% ALC/VOL', medida:'750 ml', stock:'17', img:'https://i.postimg.cc/hGPdVt2Y/absw-ater.png'},
    {id:'4', categoria:'vodka', marca:'absolut', nombre:'Absolut Pears', precio:'$4200', descripcion:'Vodka sabor pera', graduacion:'38% ALC/VOL', medida:'750 ml', stock:'25', img:'https://i.postimg.cc/gkNdrHsH/abspears.png'},
    {id:'5', categoria:'vodka', marca:'absolut', nombre:'Absolut Citric', precio:'$4200', descripcion:'Vodka sabor cítrico', graduacion:'40% ALC/VOL', medida:'750 ml', stock:'18', img:'https://i.postimg.cc/XN1CRmBw/abscitric.png'},
    {id:'6', categoria:'vodka', marca:'absolut', nombre:'Absolut Raspberry', precio:'$4200', descripcion:'Vodka sabor frambuesa', graduacion:'38% ALC/VOL', medida:'750 ml', stock:'23', img:'https://i.postimg.cc/15NGZVGS/absrasp.png'},
    {id:'7', categoria:'vodka', marca:'absolut', nombre:'Absolut Extrakt', precio:'$4200', descripcion:'Vodka sabor cardamomo', graduacion:'35% ALC/VOL', medida:'750 ml', stock:'19', img:'https://i.postimg.cc/NMMTyd7R/absextract.png'},
    {id:'8', categoria:'vodka', marca:'absolut', nombre:'Absolut Mango', precio:'$4200', descripcion:'Vodka sabor mango', graduacion:'38% ALC/VOL', medida:'750 ml', stock:'24', img:'https://i.postimg.cc/3wjDqGDw/absmango.png'},
    {id:'9', categoria:'vodka', marca:'absolut', nombre:'Absolut Pepper', precio:'$4500', descripcion:'Vodka sabor pimienta', graduacion:'38% ALC/VOL', medida:'750 ml', stock:'15', img:'https://i.postimg.cc/pLGLhdd2/abspepp.png'},
    {id:'10', categoria:'vodka', marca:'absolut', nombre:'Absolut Grapefruit', precio:'$4200', descripcion:'Vodka sabor pomelo rosado', graduacion:'40% ALC/VOL', medida:'750 ml', stock:'12', img:'https://i.postimg.cc/yY2qgjpx/absgrapef.png'},
    {id:'11', categoria:'vodka', marca:'absolut', nombre:'Absolut 100', precio:'$4800', descripcion:'Vodka con sabor intensificado', graduacion:'50% ALC/VOL', medida:'750 ml', stock:'8', img:'https://i.postimg.cc/28w5vVLg/abs100.png'},
    {id:'12', categoria:'vodka', marca:'absolut', nombre:'Absolut Kurant', precio:'$4500', descripcion:'Vodka sabor grosellas negras', graduacion:'40% ALC/VOL', medida:'750 ml', stock:'17', img:'https://i.postimg.cc/13x6zg66/abskurant.png'}
]

export let mockFecht = (id) => {
    
    return new Promise ((res,rej) => {
        setTimeout (() => {
            res(id ? productos.find(prod => prod.id == id): productos)
        },500)
    })
}
