/* eslint-disable react/prop-types */
import Select, { components } from 'react-select';
import i18next from 'i18next';
import { customStyles, getOptions } from './constants';
import styles from './style.module.scss';

interface CustomSelectProps {
	categories: string[];
	setCategorieSelected: (cat: string) => void;
}

export const CustomSelect = ({
	categories,
	setCategorieSelected,
}: CustomSelectProps) => {
	const options = getOptions(categories);

	return (
		<div className={styles.selectContainer}>
			<span className={styles.text}>{i18next.t<string>('select:filter')}</span>
			<Select
				isSearchable={false}
				styles={customStyles}
				defaultValue={options[0]}
				options={options}
				className={styles.customSelect}
				components={{
					DropdownIndicator: ({ children, ...rest }) => (
						<components.DropdownIndicator {...rest}>
							▼{children}
						</components.DropdownIndicator>
					),
				}}
				onChange={cat => setCategorieSelected(cat!.value)}
			/>
		</div>
	);
};
