"use client";

import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react"


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
        <div className=" flex justify-between h-15 bg-amber my-2 mx-2">
            <div className="w-[133px] h-[103px] m-1 bg-light-brown text-center pt-3">
                img
            </div>
            <div className="mx-4 pt-2 w-[207px]">
                <div className=" text-sm text-center mb-2">
                    Nombre del producto
                </div>
                <div className="text-center ">
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="border rounded-md p-1 w-16 text-black"
                    />
                </div>
                <div className=" flex justify-end gap-10 text-dark-pink text-center pt-5 ml-10">
                    159999 $
                    <Trash2 />
                </div>
            </div>
        </div>
    )
}
export default CartItem;