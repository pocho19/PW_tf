import {Link} from "react-router-dom";
import React from "react";

const System = () => {
    return(
        <div className='System-general'>
            <h1>system APP (auth)</h1>
            <pre></pre>
            Modifica los datos de tu perfil
            <Link to="/profile">Perfil</Link>
            <pre></pre>
            Edita los elementos de tu casa
            <Link to="/myhouse">Mi Casa</Link>
            <pre></pre>
            Agregale elementos a tu casa
            <Link to="/elements">Elementos</Link>
            <pre></pre>
        </div>
    )
}
export default System