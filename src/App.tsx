import { Header } from 'screens/Header';
import { TechProducts } from 'screens/techPrducts';
import { PointsState } from 'context/PointsState';

function App() {
	return (
		<PointsState>
			<div className="App">
				<Header />
				<TechProducts />
			</div>
		</PointsState>
	);
}

export default App;
