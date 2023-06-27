import { useEffect, useState } from 'react'
import './Home.css'
import { Slide } from './slide/Slide'
import { SlidePro } from './slide_projects/SlidePro'
import perfil from '../assets/img/perfil.jpeg'
import axios from 'axios'
const mockProjects = [
  {
    _id: 1,
    title: 'IoT Platform',
    path: 'iot',
    description: 'Platform to administrate IoT Devices, made whit Vue, EMQX, AXIOS, NODE js, MONGODB and others dependencies.',
    img: 'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg'
  },
  {
    _id: 2,
    title: 'API REST',
    path: 'apirest',
    description: 'Platform to administrate IoT Devices, made whit Vue, EMQX, AXIOS, NODE js, MONGODB and others dependencies.',
    img: 'https://images.unsplash.com/photo-1625490939776-17cef70ec079?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2aWNlc3xlbnwwfHwwfHw%3D&w=1000&q=80'
  }
]
const getHomeData = async () => {
  const storageResponse = JSON.parse(window.localStorage.getItem('projectss'))
  if (!storageResponse) {
    const apiResponse = await axios.get('http://localhost:3100/project?userId=643f3cb279236a7340eb58a5')
    const responseData = apiResponse.data
    return responseData
  }
  return storageResponse
}
export const Home = () => {
  const [projects, setProjects] = useState(mockProjects)
  useEffect(() => {
    const getProjectsfromApi = async () => {
      const homeData = await getHomeData()
      const homeProjects = homeData.map((item) => item.cards[0])
      setProjects(homeProjects)
    }
    getProjectsfromApi()
  }, [])
  return (
    <main>
      <header className='header'>
        <div className='header_info'>
          <h1 className='header_info_title'>DESARROLLO CON DEDICACIÓN</h1>
          <p>Juan Carlos Mamani Rojas: <br />Junnior Full Stack Developer</p>
        </div>

        <img className='header_img' src={perfil} alt='' />
      </header>
      <h2 className='subtitle'>CONOCIMIENTOS</h2>
      <div className='intro'>
        <div className='intro_icons'>
          <Slide />
        </div>
        <p>Tengo experiencia en el desarrollo de aplicaciones de diferentes tamaños y complejidades, tanto en el Front End como en el Back End. También he trabajado en proyectos de IoT utilizando EMQX y me mantengo actualizado en las últimas tendencias tecnológicas.</p>
      </div>
      <hr className='between_line' />
      <h2 className='subtitle'>PROYECTOS</h2>
      <SlidePro data={projects} footer />
    </main>
  )
}
