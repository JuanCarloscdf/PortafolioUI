import axios from 'axios'
import './projects.css'
import { SlideItem } from './slide_projects/SlideItem'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const getHomeData = async () => {
  const storageResponse = JSON.parse(window.localStorage.getItem('projectss'))
  if (!storageResponse) {
    const apiResponse = await axios.get('http://localhost:3100/project?userId=643f3cb279236a7340eb58a5')
    const responseData = apiResponse.data
    return responseData
  }
  return storageResponse
}
export const Projects = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getProjectsfromApi = async () => {
      const apiResponse = await getHomeData()
      const homeProjects = apiResponse.map((item) => item.cards[0])
      console.log('home', homeProjects)
      setItems(homeProjects)
    }
    getProjectsfromApi()
  }, [])
  const handleSendProject = ({ id }) => {
    console.log('id :>> ', id)
    window.localStorage.setItem('ToSeePro', JSON.stringify(id))
  }
  return (
    <main className='main_container'>
      <h1>PROJECTS</h1>
      <div className='pro_container'>
        {
          items.map((item) => {
            console.log(item)
            return (
              <div className='slide_pro' key={item._id}>
                <h1>{item.title}</h1>
                <SlideItem item={item} />
                <Link to='/SeePro' className='slide_link' onClick={() => handleSendProject({ id: item._id })}>see More info ...</Link>
              </div>
            )
          })
        }
      </div>
    </main>
  )
}
