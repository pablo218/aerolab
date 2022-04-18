import styles from './style.module.scss';

interface AddPointsProps {
	amount: number;
	setAmount: (amount: number) => void;
}

export const AddPointsOptions = ({ amount, setAmount }: AddPointsProps) => {
	return (
		<div className={styles.container}>
			<input
				type="radio"
				name="points"
				id="min"
				value={1000}
				checked={amount === 1000 && true}
				onChange={() => setAmount(1000)}
			/>
			<label
				htmlFor="min"
				className={`${styles.customLabel} btn btn-xs btn-notSelected`}
			>
				<span className={styles.innerText}>1000</span>
			</label>
			<input
				type="radio"
				name="points"
				id="med"
				value={5000}
				checked={amount === 5000 && true}
				onChange={() => setAmount(5000)}
			/>
			<label
				htmlFor="med"
				className={`${styles.customLabel} btn btn-xs btn-notSelected`}
			>
				<span className={styles.innerText}>5000</span>
			</label>
			<input
				type="radio"
				name="points"
				id="max"
				value={7500}
				checked={amount === 7500 && true}
				onChange={() => setAmount(7500)}
			/>
			<label
				htmlFor="max"
				className={`${styles.customLabel} btn btn-xs btn-notSelected`}
			>
				<span className={styles.innerText}>7500</span>
			</label>
		</div>
	);
};
