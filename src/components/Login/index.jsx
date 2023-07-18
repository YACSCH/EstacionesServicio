const Login = () => {
  return (
    <>
        <form>
            <label htmlFor="email">email</label>
            <input type="text" id="email" />
            <label htmlFor="password"></label>
            <input type="text" id="password" />
            <button type="submit">Ingresar</button>
            <a href="">Registarse</a>
        </form>
    </>
  )
}
export default Login;