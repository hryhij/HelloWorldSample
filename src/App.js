import './App.css';
import Header from './Navigation/header'
import Home from './Content/Home'
import Post from './Content/Post'
import AddPost from './Content/AddPost'
import Groups from './Content/Groups'
import AddGroup from './Content/AddGroup'
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Container from '@mui/material/Container';

function App() {
  return (
    <Router>
      <div className="App">
        <Container maxWidth="lg">

          <Header />   
          <div className='content'>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/Post'>
                <Post />
              </Route>
              <Route path='/AddPost'>
                <AddPost />
              </Route>
              <Route path='/Groups'>
                <Groups />
              </Route>
              <Route path='/AddGroup'>
                <AddGroup />
              </Route>
              
            </Switch>
          </div>

        </Container>         
      </div>
    </Router>
  );
}

export default App;
