import { useState } from 'react';

import { MessageWrapper } from 'components/MessageWrapper';
import { ProductCard } from 'components/ProductCard';

import { Product } from 'types/apiResponses';
import styles from './style.module.scss';
import i18next from 'i18next';

interface ProductListProps {
	list?: Product[];
}

export const ProductList = ({ list }: ProductListProps) => {
	const [message, setMessage] = useState<string | undefined>();
	const [extraData, setExtraData] = useState<string | undefined>();
	const [messageType, setMessageType] = useState<string>();

	const getMessage = (type: string, data?: string) => {
		if (type === 'success') {
			const newMessage = i18next.t<string>('producList:successMessage');
			setMessage(newMessage);
			setExtraData(data);
			setMessageType(type);
		} else {
			setMessage(i18next.t<string>('producList:errorMessage'));
			setMessageType(type);
		}
	};

	const closeMessageHandler = () => setMessage(undefined);

	return (
		<MessageWrapper
			message={message}
			extraData={extraData}
			type={messageType}
			closeMessageHandler={closeMessageHandler}
		>
			<div className={styles.list}>
				{list?.map(product => (
					<ProductCard
						key={product._id}
						image={product.img.hdUrl}
						name={product.name}
						category={product.category}
						cost={product.cost}
						prodId={product._id}
						getMessage={getMessage}
					/>
				))}
			</div>
		</MessageWrapper>
	);
};
