import { ReactNode } from 'react';

interface BtnProps {
	children: ReactNode;
	className?: string;
	disabled?: boolean;
	onclick?: (param?: any) => void;
}

export const Button = ({
	children,
	className,
	disabled,
	onclick,
}: BtnProps) => {
	return (
		<button className={className} disabled={disabled} onClick={onclick}>
			{children}
		</button>
	);
};
