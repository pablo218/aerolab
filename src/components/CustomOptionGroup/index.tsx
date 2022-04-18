import { order } from './constants';

import i18next from 'i18next';
import { ChangeEventHandler } from 'react';

import styles from './style.module.scss';

interface CustomOptionsProps {
	orderSelected?: string;
	oderHandler: (order: string) => void;
}

export const CustomOptionGroup = ({
	orderSelected,
	oderHandler,
}: CustomOptionsProps) => {
	const changeOrderHandler: ChangeEventHandler<HTMLInputElement> = e =>
		oderHandler(e.target.value);

	return (
		<div className={styles.container}>
			<p className={`text l1 ${styles.sortText}`}>
				{i18next.t<string>('orderOptions:selectOrder')}
			</p>
			<input
				type="radio"
				name="order"
				id={order.RECENT}
				value={order.RECENT}
				checked={orderSelected === order.RECENT && true}
				onChange={changeOrderHandler}
			/>
			<label
				htmlFor={order.RECENT}
				className={`${styles.customLabel} btn btn-s btn-notSelected`}
			>
				<span className={styles.innerText}>
					{i18next.t<string>('orderOptions:recent')}
				</span>
			</label>
			<input
				type="radio"
				name="order"
				id={order.LOWER}
				value={order.LOWER}
				checked={orderSelected === order.LOWER && true}
				onChange={changeOrderHandler}
			/>
			<label
				htmlFor={order.LOWER}
				className={`${styles.customLabel} btn btn-s btn-notSelected`}
			>
				<span className={styles.innerText}>
					{i18next.t<string>('orderOptions:lowerPrice')}
				</span>
			</label>
			<input
				type="radio"
				name="order"
				id={order.HIGHEST}
				value={order.HIGHEST}
				checked={orderSelected === order.HIGHEST && true}
				onChange={changeOrderHandler}
			/>
			<label
				htmlFor="highest"
				className={`${styles.customLabel} btn btn-s btn-notSelected`}
			>
				<span className={styles.innerText}>
					{i18next.t<string>('orderOptions:highestPrice')}
				</span>
			</label>
		</div>
	);
};

/* ="btn btn-m btn-notSelected" */
