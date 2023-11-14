import '../Style/style.css'

const Registro = () => {
    return (

        <form action="#">
            <input
                className="input"
                name="name"
                type="text"
                placeholder="Nombre"
                required=""
            />
            <input
                className="input"
                name="apellido"
                type="text"
                placeholder="Apellido"
                required=""
            />
            <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                required=""
            />
            <input
                className="input"
                type="tel"
                name="tel"
                placeholder="Teléfono"
                required=""
            />
            <input
                className="input"
                type="password"
                name="psw"
                placeholder="Ingrese una clave"
                required=""
            />
            <input
                className="input"
                type="password"
                name="psw2"
                placeholder="Ingrese la clave nuevamente"
                required=""
            />
            <input
                className="btn-envio"
                type="submit"
                name="enviar"
                defaultValue="Enviar datos"
            />
        </form>
    )
}

export default Registro
