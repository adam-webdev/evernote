import './App.css';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Home from './components/home/home';
import Favorites from './components/home/notes/Favorites';
import NoteDetail from './components/home/notes/NoteDetail';
import NoteEdit from './components/home/notes/NoteEdit';


function App() {
 
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/note/:id" component={NoteDetail} />
        <Route path="/edit-note/:id" component={NoteEdit} />
      </Switch>
    </Router>
  );
}

export default App;
