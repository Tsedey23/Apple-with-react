import React, {Component}from'react';
 import Header from './Component/Header/Header';
import First from './Component/Main/First/First';
import Second from './Component/Main/Second/Second';
import Third from './Component/Main/Third/Third';
import Fourth from './Component/Main/Fourth/Fourth';
import Fifth from './Component/Main/Fifth/Fifth';
import Six from './Component/Main/Six/Six';
import Footer from './Component/Footer/Footer';
import Alert from './Component/Main/Alert/Alert';

class App extends Component { 
render() {
return(
  <div>
  <Header/>
  <Alert/>
  <First/>
  <Second/>
  <Third/>
  <Fourth/>
  <Fifth/>
  <Six/>
  <Footer/>
</div>
)
}

}
export default App;
