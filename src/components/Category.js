import React from 'react'
import { useState } from 'react'

function Category(props) {

    const title = props.title;
    const imageSrc = props.src;
    

    const [amount, setAmount] = useState(0)
   

     return (
    <div id='category'>
       
        <div><h2> {amount} {title} added to basket</h2></div>
        <div id="title"><h1>{title}</h1></div>
        <div id='image'><img src={imageSrc} /></div>
        <div id="link"><button type="button" onClick={ () => setAmount(amount+1)}>Add to Basket</button></div>
      

    </div>
  )
}

export default Category