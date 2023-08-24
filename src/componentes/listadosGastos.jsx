import React from 'react'
import Gasto from './gasto'

const ListadosGastos = ({
  gastos, 
  setGastoEditar, 
  eliminarGasto,
  filtro,
  gastosFiltrados
  }) => {
  return (
    <div className='listado-gastos contenedor'>

        {
            filtro ? (
              <>
              <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos aún'}</h2>
              {gastosFiltrados.map( gasto => {
                return (
                    <Gasto
                        key = {gasto.id}
                        gasto = {gasto}
                        setGastoEditar = {setGastoEditar}
                        eliminarGasto = {eliminarGasto}
                    />
                )
            })}
              </>
            ) : (
              <>
              <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
              {gastos.map( gasto => {
                return (
                    <Gasto
                        key = {gasto.id}
                        gasto = {gasto}
                        setGastoEditar = {setGastoEditar}
                        eliminarGasto = {eliminarGasto}
                    />
                )
            })}
            </>
            )
        }
        
    </div>
  )
}

export default ListadosGastos