import data from '../data/productos.json' 

const pedirProductos = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(data)
        }, 500)
        
    })
}

export const pedirItem = (id) => {
    return new Promise((resolve, reject) => {

        const item = data.find((el) => el.id === id);
        if (item){
            resolve(item)
        }else{
            reject({
                error:'no se encontro el producto'
            })   

    }
})
}

export default pedirItem && pedirProductos;
