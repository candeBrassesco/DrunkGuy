let productos = [
    {id:'1', categoria:'vodka', marca:'absolut', nombre:'Absolut', precio:'', descripcion:'Vodka sabor original', stock:'20', img:'https://postimg.cc/K3nZg4MS'},
    {id:'2', categoria:'vodka', marca:'absolut', nombre:'Absolut Vanilia', precio:'', descripcion:'Vodka sabor vainilla', stock:'15', img:'https://postimg.cc/6246tM6Q'},
    {id:'3', categoria:'vodka', marca:'absolut', nombre:'Absolut Watermelon', precio:'', descripcion:'Vodka sabor sandía', stock:'17', img:'https://postimg.cc/cKH45sVw'},
    {id:'4', categoria:'vodka', marca:'absolut', nombre:'Absolut Pears', precio:'', descripcion:'Vodka sabor pera', stock:'25', img:'https://postimg.cc/BjNng8wJ'},
    {id:'5', categoria:'vodka', marca:'absolut', nombre:'Absolut Citric', precio:'', descripcion:'Vodka sabor cítrico', stock:'18', img:'https://postimg.cc/75qL019B'},
    {id:'6', categoria:'vodka', marca:'absolut', nombre:'Absolut Raspberry', precio:'', descripcion:'Vodka sabor frambuesa', stock:'23', img:'https://postimg.cc/qgnBFDZb'},
    {id:'7', categoria:'vodka', marca:'absolut', nombre:'Absolut Extract', precio:'', descripcion:'Vodka sabor cardamomo', stock:'19', img:'https://postimg.cc/RJrSFwqL'},
    {id:'8', categoria:'vodka', marca:'absolut', nombre:'Absolut Mango', precio:'', descripcion:'Vodka sabor mango', stock:'24', img:'https://postimg.cc/CZQM33gt'}
]

export let mockFecht = (id) => {
    return new Promise ((res,rej) => {
        setTimeout (() => {
            res(productos)
        },500)
    })
}
