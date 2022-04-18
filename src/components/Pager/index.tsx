import chevronActive from 'assets/icons/chevron-active.svg';
import chevronDisable from 'assets/icons/chevron-default.svg';

import styles from './style.module.scss';

interface PagerProps {
	paginationHandler: (page: number) => void;
	page: number;
}

export const Pager = ({ paginationHandler, page }: PagerProps) => {
	const onclickHandler = (page: number) => {
		paginationHandler(page);
	};

	return (
		<div className={styles.pager}>
			<div
				className={`${styles.chevronContariner}   ${
					page === 1 && styles.chevronDisabled
				}`}
				onClick={() => onclickHandler(1)}
			>
				<img
					src={page === 1 ? chevronDisable : chevronActive}
					className={styles.chevronL}
				/>
			</div>
			<span className={`text l1 ${styles.text}`}>Page</span>
			<span className={`${styles.pageNumber} text l1`}>{page} of 2</span>
			<div
				className={`${styles.chevronContariner}   ${
					page === 2 && styles.chevronDisabled
				}`}
				onClick={() => onclickHandler(2)}
			>
				<img
					src={page === 2 ? chevronDisable : chevronActive}
					className={styles.chevronR}
				/>
			</div>
		</div>
	);
};

//
