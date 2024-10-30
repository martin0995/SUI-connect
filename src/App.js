import './App.css';
import WormholeConnect from '@wormhole-foundation/wormhole-connect';

const config = {
	network: 'Testnet',
	chains: ['Sui', 'Avalanche'],
	ui: {
		title: 'SUI Connect Demo',
	},
};

function App() {
	return <WormholeConnect config={config} />;
}

export default App;
