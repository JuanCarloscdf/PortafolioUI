import { useEffect, useState } from 'react'
import { RenderProject } from './RenderProject/RenderProject'
import github from '../assets/img/github.svg'
const mockCards = [
  {
    title: 'Animales de la web',
    description: 'El perro, ​​​ llamado perro doméstico o can, ​ y en algunos lugares coloquialmente llamado chucho, ​ tuso, ​ choco, ​ entre otros; es un mamífero carnívoro de la familia de los cánidos, que constituye una especie del género Canis.​​',
    img: 'https://images.unsplash.com/photo-1546238232-20216dec9f72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVycml0b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    _id: '644445ef091e900bf4b753a6'
  },
  {
    title: 'super lindos',
    description: 'El perro, ​​​ llamado perro doméstico o can, ​ y en algunos lugares coloquialmente llamado chucho, ​ tuso, ​ choco, ​ entre otros; es un mamífero carnívoro de la familia de los cánidos, que constituye una especie del género Canis.​​',
    img: 'https://images.unsplash.com/photo-1606833694770-40a04762ac16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnJpdG9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    _id: '644445ef091e900bf4b753a7'
  },
  {
    title: 'necesitan de ti',
    description: 'El perro, ​​​ llamado perro doméstico o can, ​ y en algunos lugares coloquialmente llamado chucho, ​ tuso, ​ choco, ​ entre otros; es un mamífero carnívoro de la familia de los cánidos, que constituye una especie del género Canis.​​',
    img: 'https://images.unsplash.com/photo-1553434133-96822a8e94af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVycml0b3MlMjBjYWxsZWplcm9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    _id: '644445ef091e900bf4b753a8'
  }
]

export const SeeProject = () => {
  const [card, setCard] = useState(mockCards)
  const [link, setLink] = useState('')
  useEffect(() => {
    const id = JSON.parse(window.localStorage.getItem('ToSeePro'))
    const projects = JSON.parse(window.localStorage.getItem('projectss'))
    console.log(projects)
    const project = projects.find((item) => item.cards[0]._id === id)
    console.log('card :>> ', card)
    console.log(id)
    setCard(project.cards)
    setLink(project.gitLink)
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <RenderProject update={false} cards={card} />
      <div className='git_link'>
        <a href={link} target='_blank' rel='noreferrer'><img className='git_icon' src={github} alt='' /></a>
      </div>
    </>

  )
}
