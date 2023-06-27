import { useState } from 'react'
import { RenderProject } from './RenderProject/RenderProject'
import axios from 'axios'
import { ListProjects } from './ListProjects/ListProjects'
let IMG_URL = ''
export const CreateProject = () => {
  const [project, setProject] = useState(JSON.parse(window.localStorage.getItem('projectss')))
  const [cards, setCards] = useState([])
  const [formError, setFormError] = useState('')
  const [updatePro, setUpdatePro] = useState({ value: false, proId: '' })
  const [action, setAction] = useState({ value: false, index: 0 })
  const dataValidator = (card, data) => {
    if ((card.title.length < 3 || data.some((item) => item.title === card.title)) && !action.value) {
      setFormError('titulo no valido')
      return false
    }
    if (card.description.length < 100) {
      setFormError('description too short')
      return false
    }
    if (!(/^(http(s?):\/\/)?(([a-zA-Z0-9\-.]+\.[a-zA-Z]{2,63})|localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(:[0-9]+)?(\/[\w\-.?=&]*)*(#?[\w]*)?$/.test(card.img))) {
      setFormError('no valid url image')
      return false
    }
    setFormError('')
    return true
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (IMG_URL.length === 0) {
      setFormError('seleccione una imagen')
      return
    }
    console.log('action :>> ', action)
    console.log(' ddddddddddddddddddd', IMG_URL)

    const formData = Object.fromEntries(new window.FormData(event.target))
    formData.img = IMG_URL
    console.log('formData :>> ', formData)
    const isValid = dataValidator(formData, cards)
    if (!isValid) return
    if (action.value) {
      console.log('cards[action.index]  ', cards[action.index])
      const newCards = cards
      newCards[action.index] = formData
      setCards(newCards)
      setAction({ value: false, index: 0 })
    } else {
      console.log('asfasdasad')
      setCards([...cards, formData])
    }
    event.target.reset()
  }
  const updateCard = (index, card) => {
    const newAction = { value: true, index }
    setAction(newAction)
    IMG_URL = card.img
    document.getElementById('title').value = card.title
    document.getElementById('description').value = card.description
    console.log('updateCard :>> ', index, card)
    window.scrollTo(0, 0)
  }
  const deleteCard = (index, card) => {
    console.log('deleteCard :>> ', index)
    const newCards = cards.flatMap((item, i) => {
      return index === i ? [] : item
    })
    setCards(newCards)
  }
  const sendToDataBase = async () => {
    try {
      const gitLink = document.getElementById('gitLink').value
      if (!gitLink) {
        setFormError('type git link')
        return
      }
      const userData = JSON.parse(window.localStorage.getItem('User'))
      const id = userData.data.user_id
      if (updatePro.value) {
        console.log('actualiza')
        const updateProject = {
          userId: id,
          gitLink,
          cards
        }
        const apiResponse = await axios.put(`http://localhost:3100/project/${updatePro.proId}`, updateProject, {
          headers: {
            Authorization: userData.data.token
          }
        })
        setUpdatePro({ value: false, proId: '' })
      } else {
        console.log('crea')
        if (cards.length === 0) return
        const newProject = {
          userId: id,
          gitLink,
          cards
        }
        const apiResponse = await axios.post('http://localhost:3100/project', newProject, {
          headers: {
            Authorization: userData.data.token
          }
        })
        console.log(apiResponse)
      }

      const updated = await axios.get(`http://localhost:3100/project?userId=${id}`)
      window.localStorage.setItem('projectss', JSON.stringify(updated.data))
      setProject(updated.data)
      setCards([])
    } catch (error) {
      console.log(error.message)
    }
  }
  const deleteProject = async ({ id }) => {
    console.log(id)
    const userData = JSON.parse(window.localStorage.getItem('User'))
    const uid = userData.data.user_id
    const deResponse = await axios.delete(`http://localhost:3100/project/${id}`)
    const updated = await axios.get(`http://localhost:3100/project?userId=${uid}`)
    window.localStorage.setItem('projectss', JSON.stringify(updated.data))
    setProject(updated.data)
    console.log(project)
  }
  const updateProject = ({ id }) => {
    const gitLink = document.getElementById('gitLink')
    setUpdatePro({ value: true, proId: id })
    console.log(id)
    const selectedProject = project.find(item => item._id === id)
    console.log(selectedProject)
    setCards(selectedProject.cards)
    gitLink.value = selectedProject.gitLink
  }
  const getFile = async (event) => {
    event.preventDefault()
    const [file] = event.target.files
    console.log(file)
    const formData = new FormData()
    formData.append('myFile', file)
    const response = await axios.post('http://localhost:3100/upload', formData)
    console.log(response.data)
    IMG_URL = response.data
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className='cretate_card_form' id='card_form'>
        <div className='card_form'>
          <div className='card_form_left'>
            <label className='project_form_label' htmlFor='title'>Title</label>
            <input className='project_form_input' type='text' id='title' name='title' placeholder='proyecto 1' />
            {/* <label className='project_form_label' htmlFor='img'>Image</label>
            <input className='project_form_input' type='text' id='img' name='img' /> */}
            <label className='project_form_label' htmlFor='file'>file</label>
            <input className='project_form_input_file' type='file' id='file' name='file' onChange={getFile} />
            <button className='project_form_button'>{action.value ? 'update' : 'add'}</button>
            <p>{formError}</p>
          </div>
          <div className='card_form_rigth'>
            <label className='project_form_label' htmlFor='description'>Description</label>
            <textarea className='project_form_textarea' name='description' id='description' cols='30' rows='10' />
          </div>
        </div>
      </form>
      <div className='create_button_gitlink'>
        <label className='project_form_label' htmlFor='gitLink'>GitLink</label>
        <input className='project_form_input' type='text' id='gitLink' name='gitLink' />
      </div>
      <RenderProject cards={cards} update updateCard={updateCard} deleteCard={deleteCard} />
      <br />
      <div className='create_button_container'>
        <button className='create_button' onClick={sendToDataBase}>{updatePro.value ? 'UPDATE' : 'SAVE'}</button>
      </div>
      <ListProjects listData={project} deleteProject={deleteProject} updateProject={updateProject} />
    </main>
  )
}
