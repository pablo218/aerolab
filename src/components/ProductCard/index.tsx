import { useContext, useState } from 'react';
import i18next from 'i18next';
import { Button } from 'components/Button';
import icon from 'assets/icons/aeropay-3.svg';
import iconDisabled from 'assets/icons/aeropay-2.svg';
import PointsContext from 'context/PointsContext';
import { useRequest } from 'Hooks/useRequest';
import { postRedeems } from 'services/redeem';
import styles from './style.module.scss';

interface ProductCardProps {
	image: string;
	name: string;
	category: string;
	cost: number;
	prodId: string;
	getMessage: (type: string, data?: string) => void;
}

export const ProductCard = ({
	image,
	name,
	category,
	cost,
	prodId,
	getMessage,
}: ProductCardProps) => {
	const { points, removePoints } = useContext(PointsContext);
	const [buttonMessage, setButtonMessage] = useState('name');
	const { sendRequest, loading } = useRequest(
		postRedeems,
		() => {
			removePoints(cost);
			getMessage('success', name);
		},
		() => getMessage('error')
	);

	const redeemHandler = () => sendRequest(prodId);

	const interactHandler = () => setButtonMessage('interact');

	const onLeaveHandler = () => setButtonMessage('name');

	const getButtonMessage = () => {
		if (loading) return i18next.t<string>('ProductCard:processing');
		if (cost > points)
			return (
				<>
					<span className="m-right-2">
						{i18next.t<string>('ProductCard:notEnough')}
					</span>
					<img src={cost > points ? iconDisabled : icon} alt="logo" />
					<span className="m-left-2">{cost}</span>
				</>
			);

		return (
			<>
				<span className={`m-right-2`}>
					{i18next.t<string>(`ProductCard:${buttonMessage}`)}
				</span>
				{buttonMessage === 'name' && (
					<>
						<img src={cost > points ? iconDisabled : icon} alt="logo" />
						<span className="m-left-2">{cost}</span>
					</>
				)}
			</>
		);
	};

	return (
		<div
			className={styles.container}
			onMouseEnter={interactHandler}
			onMouseLeave={onLeaveHandler}
		>
			<div className={styles.card}>
				<div className={styles.product}>
					<img className={styles.image} src={image} alt={name} />
				</div>
				<div className={styles.description}>
					<h1 className={`text l1 ${styles.name}`}>{name}</h1>
					<p className={`text l2 ${styles.category}`}>{category}</p>
				</div>
			</div>
			<Button
				className={`${
					cost > points
						? 'btn btn-xl btn-disabled btn-normal'
						: 'btn btn-xl btn-hover btn-normal'
				} ${loading && styles.processing}`}
				disabled={cost > points}
				onclick={() => redeemHandler()}
			>
				{getButtonMessage()}
			</Button>
		</div>
	);
};

/* {loading ? (
	i18next.t<string>('ProductCard:processing')
) : (
	<>
		<span className={`${styles.mainText} m-right-2`}>
			{i18next.t<string>('ProductCard:name')}
		</span>
		<span className={`${styles.interactText} m-right-2`}>
			{i18next.t<string>('ProductCard:name')}
		</span>
		<img src={cost > points ? iconDisabled : icon} alt="logo" />
		<span className="m-left-2">{cost}</span>
	</>
)} */
