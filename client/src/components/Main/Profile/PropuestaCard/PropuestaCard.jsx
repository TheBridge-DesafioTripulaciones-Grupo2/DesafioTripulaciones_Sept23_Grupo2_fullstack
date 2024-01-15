import React from 'react';


const PropuestaCard = ({Titular, propuesta, fecha}) => {
  

  return (
    <>
    <section className='CardP'>
        <section><h5>Mensual/Anual</h5></section>
      <h6>Titular: {Titular}</h6>
      <h6>Propuesta several: {propuesta}</h6>
      <h6><b>{fecha}</b></h6>
    </section>
    </>
  )
};

export default PropuestaCard;