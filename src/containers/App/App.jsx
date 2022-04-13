import { BrowserRouter, Routes, Route } from 'react-router-dom';

import styles from './App.module.css';
import Header from "../../components/Header";
import routesConfig from "../../routes/routesConfig";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<div className={styles.wrapper}>
					<Header />

					<Routes>
						{routesConfig.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								element={route.component}
							/>
						))}
					</Routes>
				</div>
			</BrowserRouter>
		</>
	)
}

export default App;
