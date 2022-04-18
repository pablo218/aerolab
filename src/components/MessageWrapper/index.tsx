import React from 'react';
import okIcon from 'assets/icons/system-success.svg';
import errorIcon from 'assets/icons/system-error.svg';
import closIcon from 'assets/icons/cross-active.svg';
import styles from './style.module.scss';

interface MessageWrappProps {
	children?: React.ReactNode;
	type?: string;
	message?: string;
	extraData?: string;
	closeMessageHandler: () => void;
}

export const MessageWrapper = ({
	children,
	type,
	message,
	extraData,
	closeMessageHandler,
}: MessageWrappProps) => {
	return (
		<div>
			{message && (
				<div
					className={`${styles.messageBox} ${
						type === 'success'
							? styles.messageBoxSuccess
							: styles.messageBoxError
					}`}
				>
					<div className={styles.iconAndMessage}>
						<img
							className={styles.systemStatus}
							src={type === 'success' ? okIcon : errorIcon}
							alt="system status"
						/>
						<span className={`text l1 ${styles.message}`}>
							<span className={styles.extraData}>{extraData}</span>
							{` `}
							{message}
						</span>
					</div>
					<img
						className={styles.close}
						src={closIcon}
						alt="close"
						onClick={() => closeMessageHandler()}
					/>
				</div>
			)}
			{children}
		</div>
	);
};
