import React from 'react';
import './Friend.css'

const Friend = (props) => {
    // console.log(props.friend)
    const {firstName,maidenName,image,gender, phone, email} = props.friend
    return (

       <div className='main-container'>
       <img src={image} alt="" />
           <div className='text'>
           <h2>{firstName} {maidenName}</h2>
            <h5>Gender: {gender},  Phone: {phone}</h5>
            <h5>Email: {email}</h5>
            </div>
            <button className='btn-add'>
                <p onClick={()=>props.handleAddToCart(props.friend)}>Add Friend</p>
            </button>
       </div>
    );
};

export default Friend;