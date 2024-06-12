import React, { useEffect, useState } from 'react';
import './fakedommy.css';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

const FakeDommy = ({ addToCart }) => {
    let [dommy, setDommy] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => setDommy(json.products));
    }, []);

    function handleAddToCart(pro) {
        addToCart(pro);
    }

    return (
        <div className='container'>
            <h1 className='text-center ftxt'>DummyJSON</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt architecto sint labore provident eaque mollitia aliquid ratione adipisci expedita pariatur! Corrupti sit deleniti assumenda ea accusantium molestiae nisi rerum aspernatur?</p>
            <div className='row'>
                {dommy.map((pro) => (
                    <div className='col-lg-3 text-center coll' key={pro.id}>
                        <Link to={`/singledommy/${pro.id}`}>
                            <img src={pro.thumbnail} alt="" />
                        </Link>
                        <h3 className='price'>Price: {pro.price}</h3>
                        <h4>{pro.title.slice(0, 17)}</h4>
                        <button className='btn btn-primary' onClick={() => handleAddToCart(pro)}>More Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FakeDommy;
