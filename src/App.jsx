
import CharacterList from './components/CharacterList';
import header from './assets/header.webp';

const App = () => {

  return (
    <div className='main bg-dark text-white '>
      <div className='header ps-2 pe-2'>
        <img className='header-img' src={header}/>
      </div>      
      <CharacterList />
    </div>
  )
}

export default App
