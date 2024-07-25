import CartItem from "@/components/CartItem/CartItem";

const CartDetailPage = () => {


    const count = 3;

    return (
        <div className="bg-cream  text-brown ">
            <h1 className="text-center text-xl font-bold pt-2">Detalles de la bolsa</h1>
            <h1 className="text-center text-xl font-bold">de compra</h1>
            <div className="md:flex justify-center">
                <div>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>



                <div className="flex justify-center  overflow-auto md:items-center  md:ml-8">
                    <div className=" flex-col text-center">
                        <div className=" text-sm flex justify-between ">
                            <p>
                                Subtotal
                            </p>
                            <span className="ml-2">XXXXXXX</span>

                        </div>
                        <div className=" text-sm flex justify-between ">
                            <p>
                                Envío:
                            </p>
                            <span className="ml-2">
                                Gratis
                            </span>
                        </div>
                        <div className=" text-sm flex justify-between ">
                            <p>
                                Total:
                            </p>
                            <span className="ml-2">
                                $ XXXXXXX
                            </span>
                        </div>
                        <br />
                        <div className="flex justify-center">
                            <button className="bg-b-green w-[280px] text-cream h-[56px] font-bold text-xl rounded-lg mx-2 text-center whitespace-nowrap hover:bg-brown hover:text-white mb-4">
                                Finalizar Compra
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default CartDetailPage;