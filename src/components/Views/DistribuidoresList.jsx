const  DistribuidoresList = ({ distribuidores }) => {
  return (
    <>
    {   distribuidores ?
      Object.values(distribuidores).map((item,index) => (
      <article className="card" key={index}>
        <h3 className="card-title">{item.nombre_empresa}</h3>
        <section className="card-body">
          <p className="card-text">Dirección: {item.direccion_empresa} {item.direccion_numero}</p>
          <p className="card-text">Comuna: {item.nombre_comuna}</p>
          <p className="card-text">Región: {item.nombre_region}</p>
          <p className="card-text">Telefono: {item.fono_empresa}</p>
          <p className="card-text">Horario : {item.horario_atencion}</p>

        </section>
      </article>
    )) :<>Sin informacion</> }
    </>
  )
}

export default DistribuidoresList