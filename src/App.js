import './App.css';
import {BookProvider} from './Components/BookContext'
import AddBook from './Components/AddBook';
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateBook from './Components/UpdateBook'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DeleteBook from './Components/DeleteBook'
import {AuthProvider} from './Context/Auth'
import Login from './Components/Login'
import ForgetPassword from './Components/ForgetPassword'
import PrivateRoute from './Components/PrivateRoute'
import Dashboard from './Components/Dashboard'
import UpdateProfile from './Components/UpdateProfile'
import Signup from './Components/SignUp';

function App() {
  return (
    <Router>
      <AuthProvider>
          <BookProvider>
            <NavBar />
              <div className="App">
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/add" component={AddBook} />
                  <Route path="/update" component={UpdateBook} />
                  <Route path="/delete" component={DeleteBook} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Signup} />
                  <Route path='/forgot-password' component={ForgetPassword} />
                  <PrivateRoute path="/dashboard" component={Dashboard} />
                  <PrivateRoute path="/update-profile" component={UpdateProfile} />
                </Switch>
              </div>
          </BookProvider>
        </AuthProvider>
    </Router>


  );
}

export default App;
