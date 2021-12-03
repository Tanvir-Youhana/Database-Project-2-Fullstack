import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import './components/App.css';
import Logo from './qq.png'
import UpdatePassword from "./components/UpdatePassword";



function App() {
  return (
      <div className="app">
        {/* <div className="app__header">
          <div className= "app__logo">  
            <img src={Logo} width= {80} />
          </div>
          <div className="app_title">
            Welcome to Quantum Quacks
          </div>
         
        </div> */}
        
          <Router>
          <Switch>
            <Route exact path="/">
            <Login />
            </Route>
              <Route path="/signup">
                <Registration />
            </Route>
              <Route path="/Home">
                <Home />
            </Route>
            <Route path= "/Update">
              <UpdatePassword />
            </Route>
          </Switch>
          </Router>

      </div>
  );
}























    {/*<Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Switch>
            <Route exact path="/">
              <ProductList />
            </Route>
            <Route path="/add">
              <AddProduct />
            </Route>
            <Route path="/edit/:id">
              <EditProduct />
            </Route>
            
            <Route path="/login">
            <Login />
            </Route>
              <Route path="/registration">
                <Registration />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
    </Router>*/}

 
export default App;