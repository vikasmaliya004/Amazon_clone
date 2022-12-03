import React from 'react';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import SubTotal from '../Subtotal/SubTotal';
import "./CheakOut.css";
import {useStateValue} from "../StateProvider"

const CheakOut = () => {
     const [{basket}, dispatch] = useStateValue();
    return (
        <div>
            <div className="checkout">
                <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>
                {basket.map(item =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}/>
                ))}

                </div>
                <div className="checkout__right">
                    <SubTotal/>
                    
                </div>
            </div>
        </div>
    );
}

export default CheakOut;
