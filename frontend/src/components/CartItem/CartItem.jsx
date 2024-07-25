"use client";

import { useEffect, useState } from "react";


const CartItem = () => {

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        /* if (newQuantity > productById.stock) {
          setQuantity(productById.stock);
        } else {
          setQuantity(newQuantity);
        } */
        setQuantity(newQuantity);
    };

    return (
        <div className=" flex justify-between h-15 bg-amber my-2 ">
            <div className="w-[60px] h-[60px] m-1 bg-light-brown text-center pt-3">
                img
            </div>
            <div className="mx-4 my-2">
                <div className="text-sm pt-1 pl-1">
                    Nombre del producto
                </div>
                <div className="text-dark-pink text-center">
                    159999 $
                </div>
            </div>

            <div className="flex items-center ">
                <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="border rounded-md p-1 w-16 text-black"
                />
            </div>
            <div className="text-dark-pink text-center pt-5 ml-2">
                159999 $
            </div>
        </div>
    )
}
export default CartItem;