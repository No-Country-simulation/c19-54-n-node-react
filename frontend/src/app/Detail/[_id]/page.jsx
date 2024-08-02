import Head from 'next/head';


const ProductDetail = ({ params }) => {
    const { _id} = params;



    return (
        <div className="bg-cream text-brown min-h-screen">
            <Head>
                <title>Detalles del Producto</title>
            </Head>
            <div className="container mx-auto p-4">
                <a href="#" className="text-sm underline">&#8592; Volver</a>
                <h1 className="text-center text-xl font-bold pt-2">Detalles del Producto {_id}</h1>
                
                <div className="md:flex justify-center gap-8 mt-4">
                    <div className="images-section flex-1">
                        <div className="main-image bg-gray-300 h-64 mb-4"></div>
                        <div className="small-images flex gap-2">
                            <div className="small-image bg-gray-300 h-16 w-16"></div>
                            <div className="small-image bg-gray-300 h-16 w-16"></div>
                            <div className="small-image bg-gray-300 h-16 w-16"></div>
                            <div className="small-image bg-gray-300 h-16 w-16"></div>
                        </div>
                    </div>
                    <div className="details-section flex-1">
                        <button className="wishlist-button p-2 rounded-full bg-gray-300 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="product-info border-t border-gray-300 mt-4 pt-4">
                    <h2 className="text-2xl font-bold">$13400 </h2>
                    <div className="rating flex items-center gap-2 my-2">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-gray-600">(50000)</span>
                    </div>
                    <p className="description my-2">
                        TABLA DE MADERA para cortar personalizada, con diseños únicos. Ideal para asado. Te ayudo a personalizar tu tabla.
                    </p>
                    <div className="additional-info flex flex-col gap-1 my-2">
                        <span>Envíos a todo el país</span>
                        <span>No se acepta devolución</span>
                        <span>Tablas.Deco.SG</span>
                        <span>CABA, Argentina</span>
                    </div>
                    <div className="action-buttons flex gap-2 mt-4">
                        <button className="bg-gray-300 text-black py-2 px-4 rounded-lg">3 cuotas con tarjeta</button>
                        <button className="bg-gray-300 text-black py-2 px-4 rounded-lg">5 en stock</button>
                        <button className="bg-b-green text-cream py-2 px-4 rounded-lg hover:bg-brown hover:text-white">Ir a la bolsa</button>
                    </div>
                    <div className="product-info border-t border-gray-300 mt-4 pt-4"></div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;



