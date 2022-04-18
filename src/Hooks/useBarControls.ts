import { useState } from "react";
import { Product } from "types/apiResponses";
import { orderBy, filterByCategories } from "utils/filters";

export const useBarControls = ()=>{

    const [productList, setProductList] = useState<Product[]>();
    const [pageList, setPageList] = useState<Product[]>();
    const [order, setOrder] = useState<string>();
    const [page, setPage] = useState<number>(1)
    const [categorieSelected, setCategorieSelected] = useState<string>(); 

    
    const prouctsByPage = 16

    const filterHandler = (category: string)=>{
        const fiterdedData = filterByCategories(category, productList!)
        const orderedData = orderBy(order, fiterdedData)
        const firstPage = orderedData!.filter(
			(product, index) => index < prouctsByPage -1
		);
        setPageList(firstPage)
        setCategorieSelected(category)
    }

    const orderHandler = (orderSelected: string)=>{
        const orderedData = orderBy(orderSelected, productList!)
        const fiterdedData = filterByCategories(categorieSelected, orderedData)
        const firstPage = fiterdedData.filter(
			(product, index) => index < prouctsByPage -1
		);
        setPageList(firstPage)
        setOrder(orderSelected)
    }

    const paginationHandler = (pageSelected: number) => {

        const fiterdedData = filterByCategories(categorieSelected, productList!)
        const orderedData = orderBy(order, fiterdedData)
        const firstPage = orderedData.filter(
			(product, index) => index < prouctsByPage -1
		)
        const secondPage = orderedData.filter(
			(product, index) => index > prouctsByPage -1
		)
        
        if(pageSelected === 2 && secondPage.length > 0){
            setPageList(secondPage)
            setPage(pageSelected)
        }
        else if(pageSelected === 1) {
            setPageList(firstPage)
            setPage(pageSelected)
        }

	};

    return {productList, 
        setProductList, 
        filterHandler, 
        categorieSelected,
        orderHandler, 
        order,
        paginationHandler,
        page,
        pageList,
        setPageList}
}