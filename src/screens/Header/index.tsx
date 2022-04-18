import { useEffect, useContext } from 'react';
import { Link } from 'react-scroll';
import i18next from 'i18next';
import styles from './style.module.scss';
import hero from 'assets/illustrations/hero-desktop.png';
import { SpecialsCard } from 'components/SpecialsCard';
import { cardsTypes } from 'components/SpecialsCard/constants';
import { useRequest } from 'Hooks/useRequest';
import { getUserData } from 'services/userServices';
import { UserData } from 'types/apiResponses';
import PointsContext from 'context/PointsContext';
import { Nav } from 'components/Nav';

export const Header = () => {
	const { setPoints, points } = useContext(PointsContext);

	const { sendRequest } = useRequest(getUserData, (data: UserData) => {
		setPoints(data.points);
	});

	useEffect(() => {
		sendRequest();
	}, []);

	const { CHOOSE, BROWSE, ENJOY } = cardsTypes;

	return (
		<>
			<Nav points={points} />
			<header className={styles.header}>
				<div className={styles.container}>
					<div className={styles.leftSide}>
						<p className={`${styles.pretitle} text l1 m-top-20 m-left-20`}>
							{i18next.t<string>('Home:preTitle')}
						</p>
						<h1 className="titles l1">
							<span className={styles.title}>tech</span>
							<br />
							zone
						</h1>
						<p className={`${styles.description} text l1 m-top-3`}>
							{i18next.t<string>('Home:description')}
						</p>
						<Link
							className="m-top-9 btn btn-xxl btn-hover btn-normal"
							to="products"
							smooth={true}
							duration={1000}
						>
							{i18next.t<string>('Home:button')}
						</Link>
					</div>
					<div className={styles.rightSide}>
						<div className={styles.imageContainer}>
							<img className={styles.hero} src={hero} alt="hero" />
						</div>
					</div>
				</div>
			</header>
			<section className={styles.specials}>
				<div className={styles.cardsContainer}>
					<SpecialsCard cardType={BROWSE} className={styles.browse} />
					<SpecialsCard cardType={CHOOSE} className={styles.choose} />
					<SpecialsCard cardType={ENJOY} className={styles.enjoy} />
				</div>
			</section>
		</>
	);
};
