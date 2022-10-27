import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage(props) {


    return (
        <header className="d-flex justify-content-between align-items-center">
            {props.page==1 ?(
                <p>Page: {props.page}</p> 
                ):(
                    <button 
                        className="btn btn-primary btn-sm" 
                        onClick={() => props.setPage(props.page - 1)}
                    >
                       {`< Page ${props.page - 1}`} 
                    </button>
                ) 
            }
            <div>{props.page}</div>
            {props.page==42 ? (
                <p>Page: {props.page}</p>
            ):(
                <button 
                    className="btn btn-primary btn-sm" 
                    onClick={() => props.setPage(props.page + 1)}>
                {`Page ${props.page + 1} >`} 
                </button>
            )}
            
        </header>
    )
}

const CharacterList = () => {


    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)


    useEffect(() => {
  
      async function fetchData () {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await response.json();
        setLoading(false)
        setCharacters(data.results);
      }
  
      fetchData();
      
    }, [page]);



    return (
        <div className="ms-5 me-5">

            <NavPage page={page} setPage={setPage}/>

            {
                loading ? (
                    <h1>Loading...</h1>
                ) : (
                        <section className="d-flex flex-wrap justify-content-evenly pt-3">
                        {
                            characters.map(character => {
                            return (
                                    <Character key={character.id} character={character} />
                            );
                            })
                        }
                        </section>
                    )
            }

            <NavPage page={page} setPage={setPage}/>
        </div>
        )
    



}

export default CharacterList