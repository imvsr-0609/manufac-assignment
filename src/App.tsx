import { ReactElement } from 'react';
import Flavanoids from './components/flavanoids/Flavanoids';
import Gamma from './components/gamma/Gamma';
import Personal from './components/personal/Personal';
import { personalInfo } from './constants/personal';

function App(): ReactElement {
	return (
		<div className="App">
			<Flavanoids />
			<Gamma />
			<Personal {...personalInfo} />
		</div>
	);
}

export default App;
