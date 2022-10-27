

const Character = ({character}) => {

  // console.log(character);

  return (
    <div className='d-flex flex-row card'>
      <div className='image'>
        <img className='img img-fluid' src={character.image} alt={character.name}/>
      </div>
      <div className="datos d-flex flex-column justify-content-evenly ">
        <h3 className="fs-5">{character.name}</h3>
        <p className="fs-6"><span className="fw-bold">Origen: </span>{character.origin.name}</p>
        <p className="fs-6"><span className="fw-bold">Especie: </span>{character.species}</p>
        <div className="d-flex flex-row align-items-center" >
          <div class={`me-1  ${ character.status === 'Alive' ? 'blob green' : 'blob red' } `}></div>
          <p className={`fs-6 fw-bolder ${ character.status === 'Alive' ? 'text-success' : 'text-danger' }`}>{character.status}</p>
          
        </div>
        
      </div>    
    </div>
  )
}

export default Character