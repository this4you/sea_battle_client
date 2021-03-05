import 'antd/dist/antd.css';
import './App.css';
import { GamePlatform, HomePage } from './pages'

function App() {
  return (
    <div className="app">
      <div className="header-logo">
        SEA battle
      </div>
       <GamePlatform/>
      {/*<HomePage />*/}
    </div>
  );
}

export default App;
