import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    return (
        <div>
            <h2>Total Sent Request <span className='length'>{cart.length}</span></h2>
            {
                cart.map(p => <li key={p.id} className='li-product'>{p.firstName}, {p.age}</li>)
            }
    
        </div>
        
    );
};

export default Cart;