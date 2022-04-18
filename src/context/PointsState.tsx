import React, { useReducer } from 'react';
import PointsContext from './PointsContext';
import { PointsReducer } from './PointsReducer';
import { ADD_POINTS, REMOVE_POINTS, SET_POINTS } from './actions';

interface PointsContextProps {
	children: React.ReactNode;
}

export const PointsState = ({ children }: PointsContextProps) => {
	const initialState = {
		points: 0,
	};

	const [state, dispatch] = useReducer(PointsReducer, initialState);

	const setPoints = (points: number) => {
		dispatch({
			type: SET_POINTS,
			payload: points,
		});
	};

	const addPoints = (amount: number) => {
		dispatch({
			type: ADD_POINTS,
			payload: amount,
		});
	};

	const removePoints = (amount: number) => {
		dispatch({
			type: REMOVE_POINTS,
			payload: amount,
		});
	};

	const { points } = state;

	return (
		<PointsContext.Provider
			value={{ setPoints, addPoints, removePoints, points }}
		>
			{children}
		</PointsContext.Provider>
	);
};
