import { UseFetch } from "../hooks/UseFetch";
import Character from "./Character";
import { NavPage } from "./NavPage";



const CharacterList = () => {

    const {data, isLoading, page, setPage} = UseFetch('https://rickandmortyapi.com/api/character?page=');

    // console.log(data);


    return (
        <div className="ms-5 me-5 pb-3">

        <NavPage page={page} setPage={setPage}/> 

            {
                isLoading ? ( 
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                 ) : (
                         <section className="d-flex flex-wrap justify-content-between pt-3 pb-3">
                        {
                             data.map(character => {
                                return (
                                    <Character 
                                    key={character.id} 
                                    character={character} 
                                    />
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