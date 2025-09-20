import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import SuccessPage from './pages/SuccessPage';

import './App.css'

function App() {
  return (
    <>
     <BrowserRouter>
      <Switch>    
        <Route exact path="/" component={HomePage} />
        <Route path="/order" component={OrderPage} />
        <Route path="/success" component={SuccessPage} />
      </Switch>
     </BrowserRouter>
    </>
  )
}

export default App
