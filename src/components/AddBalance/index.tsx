import { useState, useContext } from 'react';
import i18next from 'i18next';

import { AddPointsOptions } from 'components/AddPointsOptions';
import logo from 'assets/icons/aeropay-1.svg';
import logoCard from 'assets/icons/aeropay-2.svg';
import chevron from 'assets/icons/chevron-default.svg';
import styles from './style.module.scss';
import { Button } from 'components/Button';
import PointsContext from 'context/PointsContext';
import { useRequest } from 'Hooks/useRequest';
import { postPoints } from 'services/userServices';

interface AddBalancePoints {
	points: number;
}

export const AddBalance = ({ points }: AddBalancePoints) => {
	const [amount, setAmount] = useState(0);
	const [showCard, setShowCard] = useState(false);

	const { setPoints } = useContext(PointsContext);

	const { sendRequest } = useRequest(postPoints, (data: any) => {
		setPoints(data['New Points']);
	});

	const clickHandler = () => {
		setShowCard(!showCard);
	};

	const addBalanceHandler = () => {
		if (amount > 0) {
			sendRequest(amount);
		}
	};

	return (
		<div className={styles.balanceContainer}>
			<div className={`${styles.coinAmount} text l1`}>
				<img src={logo} alt="aerolab-logo" />
				<span className={styles.totalPoints}>{points}</span>
				<img
					src={chevron}
					alt="chevron"
					className={showCard ? styles.chevronUp : styles.chevronDown}
					onClick={clickHandler}
				/>
			</div>
			{showCard && (
				<div className={styles.addPointsContainer}>
					<div className={styles.header}>
						<h1 className={`text l1 ${styles.headerText} `}>
							{i18next.t<string>('AddBalance:header')}
						</h1>
					</div>
					<div className={styles.body}>
						<div className={styles.creditCard}>
							<div className={styles.cardHeader}>
								<h2 className={`${styles.cardVendor} text l1`}>Aerocard</h2>
								<img
									className={styles.cardLogo}
									src={logoCard}
									alt="aerolab-logo"
								/>
							</div>
							<div className={styles.cardBody}>
								<span className={`text l2 ${styles.cardName}`}>Jhon Kite</span>
								<span className={`text l2`}>07/23</span>
							</div>
						</div>
						<AddPointsOptions setAmount={setAmount} amount={amount} />
						<Button
							className={`${styles.addButton} btn btn-m btn-hover`}
							onclick={addBalanceHandler}
						>
							<img
								className={styles.buttonLogo}
								src={logo}
								alt="aerolab-logo"
							/>
							Add Points
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};
