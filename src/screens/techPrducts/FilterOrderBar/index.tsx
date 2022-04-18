import { CustomSelect } from 'components/CustomSelect';
import { CustomOptionGroup } from 'components/CustomOptionGroup';
import { Pager } from 'components/Pager';

import styles from './style.module.scss';

interface FilterOrderBarProps {
	categories: string[];
	setCategorieSelected: (cat: string) => void;
	orderSelected?: string;
	oderHandler: (order: string) => void;
	paginationHandler: (page: number) => void;
	page: number;
}

export const FilterOrderBar = ({
	categories,
	setCategorieSelected,
	orderSelected,
	oderHandler,
	paginationHandler,
	page,
}: FilterOrderBarProps) => {
	return (
		<div className={styles.FilterOrderBar}>
			<CustomSelect
				categories={categories}
				setCategorieSelected={setCategorieSelected}
			/>
			<CustomOptionGroup
				orderSelected={orderSelected}
				oderHandler={oderHandler}
			/>
			<Pager paginationHandler={paginationHandler} page={page} />
		</div>
	);
};
