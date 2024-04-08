import Card from "./componentes/Card"
import posterImg from './assets/poster.jpg'
import empirePosterImg from './assets/empirePoster.jpg'
import jediPosterImg from './assets/jediPoster.jpg'


function  App(){
  return (
     <>
     <h1>Exercicio 2</h1>
      <Card title="Pôster: Star Wars (1977)" posterImg={posterImg}/>
      <Card title="Pôster: Empire Strikes Back (1980)"posterImg={empirePosterImg} />
      <Card title="Pôster: Return of the Jedi (1983)"posterImg={jediPosterImg}/>
      
     </>  
    )

}
export default App