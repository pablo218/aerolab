import i18next from 'i18next';
import { CardType, cards } from './constants';
import styles from './style.module.scss';

interface SpecialCardProps {
	className?: string;
	cardType: CardType;
}

export const SpecialsCard = ({ className, cardType }: SpecialCardProps) => {
	const card = cards.filter(card => card.card === cardType)[0];

	return (
		<div className={`${styles.card} ${className}`}>
			<div className={styles.cardImage}>
				<img src={card.image} alt={card.card} />
			</div>
			<div className={styles.cardFooter}>
				<div className={styles.titleContainer}>
					<div>
						<img src={card.icon} alt={`${card.card}-icon`} />
					</div>
					<h1 className={`${styles.cardTitle} titles l3`}>
						{i18next.t<string>(`${card.card}:title`)}
					</h1>
				</div>
				<p className="text l1">
					{i18next.t<string>(`${card.card}:description`)}
				</p>
			</div>
		</div>
	);
};
