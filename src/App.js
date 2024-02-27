import './App.css';
import CreateUser from './components/CreateUser';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<Header />
			<Dashboard />
			<CreateUser />
		</div>
	);
}

export default App;
