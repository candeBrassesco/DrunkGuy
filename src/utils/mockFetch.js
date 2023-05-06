
let productos = [
    {id:'1', categoria:'vodka', marca:'absolut', nombre:'Absolut', precio:'4000', descripcion:'Vodka sabor original', graduacion:'40% ALC/VOL', medida:'750 ml', stock:'20', img:'https://i.postimg.cc/RZfBG7D6/abs.png'},
    {id:'2', categoria:'vodka', marca:'absolut', nombre:'Absolut Vanilia', precio:'4200', descripcion:'Vodka sabor vainilla', graduacion:'38% ALC/VOL', medida:'750 ml', stock:'15', img:'https://i.postimg.cc/hvnNLRbZ/absvani.png'},
    {id:'3', categoria:'vodka', marca:'absolut', nombre:'Absolut Watermelon', precio:'4200', descripcion:'Vodka sabor sandía', graduacion:'38% ALC/VOL', medida:'750 ml', stock:'17', img:'https://i.postimg.cc/hGPdVt2Y/absw-ater.png'},
    {id:'4', categoria:'vodka', marca:'absolut', nombre:'Absolut Pears', precio:'4200', descripcion:'Vodka sabor pera', graduacion:'38% ALC/VOL', medida:'750 ml', stock:'25', img:'https://i.postimg.cc/gkNdrHsH/abspears.png'},
    {id:'5', categoria:'vodka', marca:'absolut', nombre:'Absolut Citric', precio:'4200', descripcion:'Vodka sabor cítrico', graduacion:'40% ALC/VOL', medida:'750 ml', stock:'18', img:'https://i.postimg.cc/XN1CRmBw/abscitric.png'},
    {id:'6', categoria:'vodka', marca:'absolut', nombre:'Absolut Raspberry', precio:'4200', descripcion:'Vodka sabor frambuesa', graduacion:'38% ALC/VOL', medida:'750 ml', stock:'23', img:'https://i.postimg.cc/15NGZVGS/absrasp.png'},
    {id:'7', categoria:'vodka', marca:'absolut', nombre:'Absolut Extrakt', precio:'4200', descripcion:'Vodka sabor cardamomo', graduacion:'35% ALC/VOL', medida:'750 ml', stock:'19', img:'https://i.postimg.cc/NMMTyd7R/absextract.png'},
    {id:'8', categoria:'vodka', marca:'absolut', nombre:'Absolut Mango', precio:'4200', descripcion:'Vodka sabor mango', graduacion:'38% ALC/VOL', medida:'750 ml', stock:'24', img:'https://i.postimg.cc/3wjDqGDw/absmango.png'},
    {id:'9', categoria:'vodka', marca:'absolut', nombre:'Absolut Pepper', precio:'4500', descripcion:'Vodka sabor pimienta', graduacion:'38% ALC/VOL', medida:'750 ml', stock:'15', img:'https://i.postimg.cc/pLGLhdd2/abspepp.png'},
    {id:'10', categoria:'vodka', marca:'absolut', nombre:'Absolut Grapefruit', precio:'4200', descripcion:'Vodka sabor pomelo rosado', graduacion:'40% ALC/VOL', medida:'750 ml', stock:'12', img:'https://i.postimg.cc/yY2qgjpx/absgrapef.png'},
    {id:'11', categoria:'vodka', marca:'absolut', nombre:'Absolut 100', precio:'4800', descripcion:'Vodka con sabor intensificado', graduacion:'50% ALC/VOL', medida:'750 ml', stock:'8', img:'https://i.postimg.cc/28w5vVLg/abs100.png'},
    {id:'12', categoria:'vodka', marca:'absolut', nombre:'Absolut Kurant', precio:'4500', descripcion:'Vodka sabor grosellas negras', graduacion:'40% ALC/VOL', medida:'750 ml', stock:'17', img:'https://i.postimg.cc/13x6zg66/abskurant.png'},
    {id:'13', categoria:'vodka', marca:'smirnoff', nombre:'Smirnoff', precio:'3500', descripcion:'Vodka sabor original', graduacion:'40% ALC/VOL', medida:'750 ml', stock:'30', img:'https://i.postimg.cc/Z5dwfPhN/smirnoff.png'},
    {id:'14', categoria:'vodka', marca:'smirnoff', nombre:'Smirnoff Citrus', precio:'3700', descripcion:'Vodka sabor cítrico', graduacion:'40% ALC/VOL', medida:'750 ml', stock:'26', img:'https://i.postimg.cc/qMqQmjDm/smircitrus1.png'},
    {id:'15', categoria:'vodka', marca:'smirnoff', nombre:'Smirnoff Apple', precio:'3700', descripcion:'Vodka sabor manzana verde', graduacion:'40% ALC/VOL', medida:'750 ml', stock:'28', img:'https://i.postimg.cc/TPxWL3Zz/smirapple.png'},
    {id:'16', categoria:'vodka', marca:'smirnoff', nombre:'Smirnoff Watermelon', precio:'3700', descripcion:'Vodka sabor sandía', graduacion:'40% ALC/VOL', medida:'750 ml', stock:'29', img:'https://i.postimg.cc/HL5Crbq2/smirwatermelon.png'},
    {id:'17', categoria:'vodka', marca:'skyy', nombre:'Skyy Coco', precio:'2200', descripcion:'Vodka sabor coco', graduacion:'40% ALC/VOL', medida:'750 ml', stock:'32', img:'https://i.postimg.cc/0ytXfrsw-/skycoco-2.png'},
    {id:'18', categoria:'vodka', marca:'skyy', nombre:'Skyy Passionfruit', precio:'2200', descripcion:'Vodka sabor maracuyá', graduacion:'40% ALC/VOL', medida:'750 ml', stock:'35', img:'https://i.postimg.cc/WzGJ79d1/skyypassion.png'},
    {id:'19', categoria:'vodka', marca:'skyy', nombre:'Skyy Pineapple', precio:'2200', descripcion:'Vodka sabor ananá', graduacion:'40% ALC/VOL', medida:'750 ml', stock:'43', img:'https://i.postimg.cc/Gm3PKsvx/skyypi-a.png'},
    {id:'20', categoria:'vodka', marca:'skyy', nombre:'Skyy Peach', precio:'2200', descripcion:'Vodka sabor durazno', graduacion:'40% ALC/VOL', medida:'750 ml', stock:'41', img:'https://i.postimg.cc/63z4yMms/skyypeach.png'},
    {id:'21', categoria:'aperitivos', marca:'campari', nombre:'Campari', precio:'1900', descripcion:'Aperitivo a base de hierbas, especias y ralladuras de frutas', graduacion:'25% ALC/VOL', medida:'750 ml', stock:'50', img:'https://i.postimg.cc/gJDNqwDC/campa.png'},
    {id:'22', categoria:'licores', marca:'jagermeister', nombre:'Jägermeister', precio:'8900', descripcion:'Licor de hierbas endulzaldo con un toque amargo', graduacion:'34.5% ALC/VOL', medida:'700 ml', stock:'34', img:'https://i.postimg.cc/FzrMgP1r/jager.png'},
    {id:'23', categoria:'licores', marca:'damonjag', nombre:'Damonjag', precio:'4800', descripcion:'Licor de hierbas, especias, frutas, cortezas y raíces', graduacion:'36% ALC/VOL', medida:'1000 ml', stock:'34', img:'https://i.postimg.cc/vZs7mD2s/damon.png'},
    {id:'24', categoria:'licores', marca:'branca', nombre:'Fernet Branca', precio:'3200', descripcion:'Licor intenso y amargo elaborado a base de hierbas', graduacion:'45% ALC/VOL', medida:'750 ml', stock:'45', img:'https://i.postimg.cc/mkHc5RxD/fernet.png'},
    {id:'25', categoria:'licores', marca:'branca', nombre:'Fernet Branca Menta', precio:'3000', descripcion:'Licor intenso y amargo elaborado a base de hierbas, con sabor a menta', graduacion:'39% ALC/VOL', medida:'750 ml', stock:'50', img:'https://i.postimg.cc/FHckh0KK/fermenta.png'},
    {id:'26', categoria:'aperitivos', marca:'gancia', nombre:'Gancia + Lima Limón', precio:'450', descripcion:'Aperitivo de sabores herbáceos y cítricos', graduacion:'3.5% ALC/VOL', medida:'430 ml', stock:'23', img:'https://i.postimg.cc/X7dgjx1Y/gancialata.png'},
    {id:'27', categoria:'aguardiente', marca:'bombay', nombre:'Bombay Brumble', precio:'10500', descripcion:'Ginebra premium elaborado a base de hierbas, especias y raíces', graduacion:'40% ALC/VOL', medida:'750 ml', stock:'20', img:'https://i.postimg.cc/HsRYyBhG/bombarbrumble.png'},
    {id:'28', categoria:'aguardiente', marca:'bombay', nombre:'Bombay Sapphire', precio:'10500', descripcion:'Ginebra premium elaborado a base de hierbas, especias y raíces', graduacion:'40% ALC/VOL', medida:'750 ml', stock:'26', img:'https://i.postimg.cc/QtKzTJ9t/bombaysapphire.png'},
    {id:'29', categoria:'aguardiente', marca:'beefeater', nombre:'Beefeater Gin', precio:'6900', descripcion:'Destilado de cereales macerados con ingredientes botánicos', graduacion:'40% ALC/VOL', medida:'700 ml', stock:'17', img:'https://i.postimg.cc/Kj63YxXj/beefeater.png'},
    {id:'30', categoria:'aguardiente', marca:'tanqueray', nombre:'Tanqueray Gin', precio:'6000', descripcion:'Ginebra elaborada a base de cilantro, regaliz, angélica y enebro', graduacion:'40% ALC/VOL', medida:'700 ml', stock:'19', img:'https://i.postimg.cc/d3mWYqSR/tanqueray.png'},
    {id:'31', categoria:'aguardiente', marca:'bulldog', nombre:'Bulldog Gin', precio:'9750', descripcion:'Ginebra destilada 4 veces e infusionada con 12 ingredientes botánicos', graduacion:'40% ALC/VOL', medida:'700 ml', stock:'13', img:'https://i.postimg.cc/906qJTBJ/bulldog.png'},
    {id:'32', categoria:'licores', marca:'morey', nombre:'Calavera negra', precio:'10000', descripcion:'Licor de alta graduación alcohólica elaborado con ajenjo y anís', graduacion:'89.9% ALC/VOL', medida:'500 ml', stock:'3', img:'https://i.postimg.cc/bY6yFdGR/calaveran.png'}
]   

export let mockFecht = (id) => {
    
    return new Promise ((res,rej) => {
        setTimeout (() => {
            res(id ? productos.find(prod => prod.id == id): productos)
        },500)
    })
}
