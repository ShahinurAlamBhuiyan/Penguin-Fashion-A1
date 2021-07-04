import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Basket from './components/Basket/Basket';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Navbar from './components/shared/Navbar/Navbar';
import Footer from './components/shared/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/basket'>
          <Basket />
        </Route>
        <Route path='/product/:productId'>
          <ProductDetails />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;