export default function DetailID({ params }) {
    const { _id } = params;

    return (
        <>
            <h1>Aqui va el detalle del producto {_id}</h1>
        </>
    )
}