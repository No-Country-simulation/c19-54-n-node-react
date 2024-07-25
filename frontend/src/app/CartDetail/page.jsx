import CartItem from "@/components/CartItem/CartItem";

const CartDetailPage = () => {


    const count = 3;

    return (
        <div className="bg-cream  text-brown">
            <h1 className="text-center text-xl font-bold pt-2">Detalles de la bolsa</h1>
            <h1 className="text-center text-xl font-bold">de compra</h1>

            <div className="flex justify-between px-3 pt-2">
                <p>Productos</p>
                <div className="flex gap-4">
                    <p>Cantidad</p>
                    <p>Subtotal</p>
                </div>
            </div>
            <div>
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="flex justify-center my-2  max-h-80">
                <fieldset className="border border-bggris p-4 rounded-md mb-4">
                    <legend className="text-xl  text-center font-bold text-brown p-4">
                        Resumen del Carrito
                    </legend>
                    <div className="flex justify-center  overflow-auto">
                        <div className=" flex-col text-center">
                            <p>
                                Cant. de productos:
                                <span className="text-bgred ml-2">{count}</span>
                            </p>
                            <br />
                            <hr />
                            <br />
                            <div className=" text-xl flex justify-between ">
                                <p>
                                    Envío:
                                </p>
                                <span className="text-bgred  ml-2">
                                    Gratis
                                </span>
                            </div>
                            <div className=" text-xl flex justify-between ">
                                <p>
                                    Total:
                                </p>
                                <span className="text-bgred  ml-2">
                                    $ XXXXXXX
                                </span>
                            </div>
                            <br />
                            <div className="flex justify-center">
                                <button className="bg-b-green w-[280px] text-brown h-[56px] font-bold text-xl rounded-lg mx-2 text-center whitespace-nowrap hover:bg-bgred hover:text-white mb-4">
                                    Finalizar Compra
                                </button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>

        </div>
    );
};

export default CartDetailPage;