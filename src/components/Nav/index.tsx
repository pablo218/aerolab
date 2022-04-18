import { AddBalance } from 'components/AddBalance';
import logo from 'assets/icons/aerolab-logo-1.svg';
import styles from './style.module.scss';

interface NavProps {
	points: number;
}

export const Nav = ({ points }: NavProps) => {
	return (
		<nav className={styles.nav}>
			<img src={logo} alt="aerolab logo" className={styles.logo} />
			<AddBalance points={points} />
		</nav>
	);
};
