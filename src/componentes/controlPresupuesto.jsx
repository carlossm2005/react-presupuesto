import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

    const formatearCantidad = (cantidad) => {
         return Number(cantidad).toLocaleString('en-US', {style:"currency", currency:"USD"})
    };

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Grafico</p>
        </div>

        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)} 
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto