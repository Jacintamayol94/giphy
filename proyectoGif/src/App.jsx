import React, { Component } from 'react'
import './appGIF.css'
import NavBar from './components/NavBar'
import Gif from './components/Gif'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trendingGifs: []
    }
  }

  apiCall(url, consecuencia) {
    fetch(url)
      .then(response => response.json())
      .then(data => consecuencia(data))
      .catch(error => console.log(error))
  }

  componentDidMount() {
    console.log('mounted')
    this.traerTrendingGifs();
  }

  traerTrendingGifs() {
    this.apiCall('https://api.giphy.com/v1/gifs/trending?api_key=igMTN4izROD9kqAjG76EA41nYWVXD1Nn', this.mostrarTrendingGifs)
  }

  mostrarTrendingGifs = (data) => {
    console.log(data)
    this.setState(
      {
        trendingGifs: data.data.map(item => item.images.downsized.url)
      }
    )
  }

  componentDidUpdate() {
    console.log('updated')
    alert('Tengo un gif nuevo')
  }

  cargarTrendingGifs = () => {
    this.traerTrendingGifs(); 
  }

  render() {

    console.log('estoy renderizando')

    const { trendingGifs } = this.state;

    let contenido

    if (this.state.trendingGifs == '') {
      contenido = <p>Cargando...</p>
    } else {
      contenido = (
        <div>

          <Gif gifUrls={trendingGifs} />

        </div>
      )
    }

    return (
      <>
        < NavBar cargarTrendingGifs={this.cargarTrendingGifs}/>

        {contenido}

      
        <button onClick={() => this.traerTrendingGifs()}>Random Gif!</button>



      </>
    )
  }
}

export default App
