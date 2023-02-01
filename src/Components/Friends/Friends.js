import React, { useEffect, useState } from 'react';
import './Friends.css'
import Friend from '../Friend/Friend';
import Cart from '../Cart/Cart';

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/users")
        .then(res => res.json())
        .then(data => setFriends(data.users))
        
    },[])
    const [cart, setCart] = useState([]);
    const handleAddToCart = (product) =>{
        const newProduct = [...cart, product]
        setCart(newProduct)
        
    }
    return (
         <div className='friends-container'>
        <div className='friend'>
        {
                friends.map(friend => <Friend
                    friend={friend}
                    key={friend.id}
                    handleAddToCart={handleAddToCart}
                    ></Friend>)
            }
        </div>
        <div className='cart-container'>
            <Cart
             cart={cart}></Cart>
        </div>
         </div>

    );
};

export default Friends;