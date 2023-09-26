import React from 'react';
import '../style/Testimony.css';
function CajaProducto(props){
  return(
  <div className='contenedor'>
    <div className='contAll'>
    <img className='img' src={require(`../img/perro${props.perro}.jpg`)} alt='Perro guau guau' />
    <p className='marca'>Marca</p>
    <div className='contInfo'>
      <p>{props.nombre}</p>
      <p>$ {props.precio}</p>
    </div>
    </div>
    <div className='carroCont'>
    <button className='agregarCarr'>Agregar al Carro</button>
    </div>
  </div>
  )
}
export default CajaProducto;