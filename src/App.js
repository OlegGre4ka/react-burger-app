import React from 'react';
import './App.scss';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  // state = {
  //   showBurgerBuilder: true
  // }

  // componentDidMount() {
  //   setTimeout(
  //     () => {
  //       this.setState({
  //         showBurgerBuilder: false
  //       })
  //     }, 5000
  //   )
  // }

  render() {
    return (
      <div className="App">
        <Layout>
          {/* {this.state.showBurgerBuilder && <BurgerBuilder />} */}
          <Switch>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
          </Switch>

        </Layout>
      </div>
    );
  }

}

export default App;
