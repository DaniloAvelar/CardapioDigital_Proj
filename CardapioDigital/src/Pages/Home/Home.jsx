import React, {useState} from 'react'

//CSS
import styles from './Home.module.css'

//Components
import Cardd from "../../Component/Card/Cardd"
import Buttons from '../../Component/Buttons/Buttons';


//Bootstrap
import Carrousel from "../../Component/Carousel/Carrousel"
import Button from 'react-bootstrap/Button';

//Pages
import Tradicional from "../Tradicional/Tradicional"
import Premium from '../Premium/Premium';
import Sweet from '../Sweet/Sweet';
import Drink from '../Drink/Drink';



const Home = () => {

  const [page, setPage] = useState(0);

  let pageAtual = "";

  if (page === 1) {
    pageAtual = <Tradicional />
  }
  else if (page === 2) {
    pageAtual = <Premium />
  }
  else if (page === 3) {
    pageAtual = <Sweet />
  }
  else if (page === 4) {
    pageAtual = <Drink />
  }

  return (
    <div>
      <Carrousel />
      <div className="container">
        {/* //Envia para os Botões o estado da variavel setPage */}
        <Buttons setPage={setPage} />
        {/* imprime a pagina atual conforme a checagem acima */}
        {pageAtual}
      </div>
    </div>
  )
}

export default Home