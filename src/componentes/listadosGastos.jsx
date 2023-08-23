import React from 'react'
import Gasto from './gasto'

const ListadosGastos = ({gastos}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>

        {gastos.map( gasto => {
            return (
                <Gasto
                    key = {gasto.id}
                    gasto = {gasto}
                />
            )
        })}
    </div>
  )
}

export default ListadosGastos