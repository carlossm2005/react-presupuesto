import { useState } from 'react'
import Header from './componentes/header'
import { generarID } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './componentes/Modal';
import ListadosGastos from './componentes/listadosGastos';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal ] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto = () => {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true)
      }, 500);
  }

  const guardarGasto = gasto => {
    gasto.id = generarID();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);
  };

  return (
    <div>
      <Header 
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        isValidPresupuesto = {isValidPresupuesto}
        setIsValidPresupuesto = {setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <ListadosGastos
              gastos = {gastos}
            />
          </main>
          <div className="nuevo-gasto">
            <img 
              src={IconoNuevoGasto}
              alt='icono nuevo gasto'
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && <Modal
                setModal = {setModal}
                animarModal = {animarModal}
                setAnimarModal = {setAnimarModal}
                guardarGasto = {guardarGasto}
      />}
      
    </div>
  )
}

export default App
