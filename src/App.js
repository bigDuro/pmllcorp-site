import { RouterComponent } from './components';
import history from './utils/history';
import './App.css';

function App() {
  return (
    <div className="App">
      <RouterComponent history={history}/>
    </div>
  );
}

export default App;
