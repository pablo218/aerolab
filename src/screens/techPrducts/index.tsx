import { useEffect } from 'react';

import { useRequest } from 'Hooks/useRequest';
import { useBarControls } from 'Hooks/useBarControls';
import { getProducts } from 'services/productsServices';
import { ProductList } from './ProductsList';
import { FilterOrderBar } from './FilterOrderBar';
import { Product } from 'types/apiResponses';
import { getCategories } from 'utils/filters';
import styles from './style.module.scss';

export const TechProducts = () => {
	const controls = useBarControls();

	const { data, sendRequest } = useRequest(getProducts, (data: Product[]) => {
		controls.setProductList(data);
		const firstPage = data.filter(
			(product, index, array) => index < array.length / 2
		);
		controls.setPageList(firstPage);
	});

	const categories = getCategories(data);

	useEffect(() => {
		sendRequest();
	}, []);

	return (
		<section className={styles.techSection} id="products">
			<h1 className={`titles l2 ${styles.techTitle}`}>
				<span className={styles.tech}>Tech</span> Products
			</h1>
			<FilterOrderBar
				categories={categories}
				setCategorieSelected={controls.filterHandler}
				orderSelected={controls.order}
				oderHandler={controls.orderHandler}
				paginationHandler={controls.paginationHandler}
				page={controls.page}
			/>
			<ProductList list={controls.pageList} />
		</section>
	);
};
