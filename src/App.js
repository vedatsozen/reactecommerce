import './App.css';
import Basket from './components/Basket';
import Category from './components/Category';



function App() {
  return (
    <div className="App">
      
      <Basket />
        <h1 className='title'>PRODUCTS</h1>
        <div id='categories'>

                 <Category title="Nike Shoe" src="nikeshoe.jpg" />
                 <Category title="Luxury Watch" src="watch.jpg" />
                 <Category title="Iphone" src="iphone.jpg" />

        </div>
    </div>
  );
}

export default App;
