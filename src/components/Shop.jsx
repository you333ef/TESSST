import Fake from '../components/Fake';
import FakeDommy from '../components/FakeDommy';
const Shop = (props) => {
  return (
    <div>
<FakeDommy addToCart={props.addToCart}/>
<Fake/>


      
    </div>
  );
}

export default Shop;
