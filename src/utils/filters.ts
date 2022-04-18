import { Product } from 'types/apiResponses';
import { order } from 'components/CustomOptionGroup/constants'
 
export const getCategories = (list: Product[])=>{
    const categories = list.map(product => product.category)
    return categories.filter((categorie, index, array)=> index === array.indexOf(categorie))
}

    
export const filterByCategories = (catSelected: string | undefined, list: Product[])=>{

    if(catSelected && catSelected !== 'all'){
        return list.filter(prod => prod.category === catSelected)
    }
    return list
    
}

export const orderBy =  (catSelected: string | undefined, list: Product[])=>{

        switch (catSelected) {
            case order.RECENT: {
                // backend don't return any param to compare this way so I use some fake order (Alhpabetic)
                return list.sort((a, b)=>{
                    if(a.name > b.name){
                        return 1
                    }
                    if(a.name < b.name){
                        return -1
                    }
                    return 0 
                })
            }
            case order.LOWER: {
                return list.sort((a,b)=> a.cost - b.cost)
            }
            case order.HIGHEST: {
                return list.sort((a,b)=> b.cost - a.cost)
            }
            default:
                return list
        }
}