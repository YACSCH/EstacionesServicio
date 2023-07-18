const Register = () => {
    return (
      <>
          <form>
            <label htmlFor="name">Nombre</label>
              <input type="text" id="name" />
              <label htmlFor="email">email</label>
              <input type="text" id="email" />
              <label htmlFor="password"></label>
              <input type="text" id="password" />
              <button type="submit">Registrarse</button>
              
          </form>
      </>
    )
  }
  export default Register;