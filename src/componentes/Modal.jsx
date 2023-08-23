import React, { useState } from 'react'
import CerrarBtn from '../img/cerrar.svg'
import Mensaje from './mensaje';
const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {

    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');

    const ocultarModal = () => {

        setAnimarModal(false);

        setTimeout(() => {
            setModal(false)
        }, 500);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if ([ nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios');

            setTimeout(() => {
                setMensaje('')
            }, 2500);
            return;
        }

        guardarGasto({nombre, cantidad, categoria})
    }

  return (
    <div className='modal'>
        <div className="cerrar-modal">
            <img 
            src={CerrarBtn} 
            alt='Boton Cerrar'
            onClick={ocultarModal}
            />
        </div>

        <form 
            className={`formulario ${animarModal ? "animar" : ''}`} 
            onSubmit={handleSubmit}
        >
            <legend>Nuevo Gasto</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

            <div className="campo">
                <label htmlFor="nombre">Nombre del Gasto</label>

                <input 
                    id='nombre'
                    type="text"
                    placeholder='Añade el nombre del gasto'
                    value={nombre}
                    onChange={ e => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>

                <input 
                    id='cantidad'
                    type="number"
                    placeholder='Añade la cantidad del gasto'
                    value={cantidad}
                    onChange={ e => setCantidad(Number(e.target.value))}
                />
            </div>
            <div className="campo">
                <label htmlFor="categoria">Categoría</label>

                <select 
                    id="categoria"
                    value={categoria}
                    onChange={ e => setCategoria(e.target.value)}    
                >

                    <option value="">-- seleccionar --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>

            <input type="submit" value="Añadir gasto" />

        </form>
    </div>
  )
}

export default Modal