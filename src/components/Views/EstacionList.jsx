const  EstacionList = ({ estaciones }) => {
  return (
    <>
    {   estaciones ?
      Object.values(estaciones).map((item,index) => (
      <article className="card" key={index}>
        <h3 className="card-title">{item.razon_social}</h3>
        <section className="card-body">
          <p className="card-text">Dirección: {item.direccion_calle} {item.direccion_numero}</p>
          <p className="card-text">Comuna: {item.nombre_comuna}</p>
          <p className="card-text">Región: {item.nombre_region}</p>

        </section>
      </article>
    )) :<>Sin informacion</> }
    </>
  )
}

export default EstacionList