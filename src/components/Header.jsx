import { Link } from 'react-router-dom'
import dev from '../assets/img/dev.svg'
import { useEffect, useState } from 'react'
import mail from '../assets/img/mail.svg'
import face from '../assets/img/face.svg'
import wtp from '../assets/img/wtp.svg'
import adminicon from '../assets/img/admin.svg'
import call from '../assets/img/call.svg'
import axios from 'axios'
import { Login } from './login/Login'

const mock = [
  {
    _id: '64443dc3091e900bf4b7538c',
    userId: '643f3cb279236a7340eb58a5',
    cards: [
      {
        title: 'Must create projects ',
        description: "Let's create a new project",
        img: 'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg',
        _id: '64443dc3091e900bf4b7538d'
      },
      {
        title: '2da carateristica',
        description: 'Lets create a new project',
        img: 'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg',
        _id: '64443dc3091e900bf4b7538e'
      }
    ],
    createdAt: '2023-04-22T20:04:19.297Z',
    updatedAt: '2023-04-22T20:04:19.297Z',
    __v: 0
  },
  {
    _id: '64443dc3091e90bf4b7538c',
    userId: '643f3cb279236a7340eb58a5',
    cards: [
      {
        title: 'Must create projects ',
        description: "Let's create a new project",
        img: 'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg',
        _id: '64443dc3091e900bf4b538d'
      },
      {
        title: '2da carateristica',
        description: 'Lets create a new project',
        img: 'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg',
        _id: '64443dc3091e900bf4b538e'
      }
    ],
    createdAt: '2023-04-22T20:04:19.297Z',
    updatedAt: '2023-04-22T20:04:19.297Z',
    __v: 0
  }
]
const mockCard = {
  _id: '64443dc3091e90bf4b7538c',
  userId: '643f3cb279236a7340eb58a5',
  cards: [
    {
      title: 'Must create projects ',
      description: "Let's create a new project",
      img: 'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg',
      _id: '64443dc3091e900bf4b538d'
    },
    {
      title: '2da carateristica',
      description: 'Lets create a new project',
      img: 'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg',
      _id: '64443dc3091e900bf4b538e'
    }
  ],
  createdAt: '2023-04-22T20:04:19.297Z',
  updatedAt: '2023-04-22T20:04:19.297Z',
  __v: 0
}
export const Header = () => {
  const [open, setOpen] = useState(false)
  const [admin, setAdmin] = useState(false)
  const handleClick = () => {
    setOpen(!open)
    setAdmin(false)
  }
  const handleAdmin = () => {
    setAdmin(!admin)
    setOpen(false)
  }
  useEffect(() => {
    const getProjectsfromApi = async () => {
      const userData = JSON.parse(window.localStorage.getItem('User'))
      const id = userData.data.user_id
      console.log(id)
      const apiResponse = await axios.get(`http://localhost:3100/project?userId=${id}`)
      console.log('aaaaaaaaaaaaaaaaaaaf', apiResponse.data)
      if (apiResponse == null || apiResponse.data.length === 0) {
        console.log('No hay contenido en apiResponse. Utilizando datos de mock.')
        window.localStorage.setItem('projectss', JSON.stringify(mock))
      } else {
        window.localStorage.setItem('projectss', JSON.stringify(apiResponse.data))
      }
    }
    getProjectsfromApi()
  }, [])
  return (
    <nav className='navBar'>
      <div className='navBar_info'>
        <h3 className='navBar_info_title'>JUAN CARLOS </h3>
        <img className='navBar_info_img' src={dev} alt='dev' />
      </div>

      <ul className='navBar_links'>
        <li className='navBar_link'><Link className='navBar_link_Link' to='/'>HOME</Link></li>
        <li className='navBar_link'><Link className='navBar_link_Link' to='/projects'>PROJECTS</Link></li>
        <li className='navBar_link'><Link className='navBar_link_Link' to='/about'>ABOUT</Link></li>
        <li className='navBar_link'><Link className='navBar_link_Link' to='/createProject'>CREATE PROJECT</Link></li>
      </ul>
      <div className='icons_container'>
        <img onClick={handleAdmin} className='navBar_icon' src={adminicon} alt='user icon' />
        <img onClick={handleClick} className='navBar_icon' src={call} alt='user icon' />
      </div>

      {
        open && (

          <div className='drop_down_container'>
            <ul className='drop_down'>
              <li><a href='' /><strong>Juan Carlos</strong></li>
              <li className='whit_hover'><a href='' />email <img className='li_icon' src={mail} alt='' /></li>
              <li className='whit_hover'><a href='' />watsap<img className='li_icon' src={wtp} alt='' /></li>
              <li className='whit_hover'><a href='' />facebook<img className='li_icon' src={face} alt='' /></li>
            </ul>
          </div>
        )
      }
      {
          admin && (
            <Login setAdmin={setAdmin} />
          )
      }
    </nav>
  )
}
