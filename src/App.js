import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage, Detail } from './pages';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/detail/:id' component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
