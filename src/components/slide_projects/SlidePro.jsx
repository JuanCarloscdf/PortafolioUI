import './slidepro.css'
import { useEffect, useState } from 'react'
import { SlideItem } from './SlideItem'
import left from '../../assets/img/left.svg'
import right from '../../assets/img/right.svg'
import { Link } from 'react-router-dom'

export const SlidePro = ({ data, footer }) => {
  const [item, setItem] = useState({ data: data[0], index: data[0]._id })
  const handleLeft = () => {
    let index = data.findIndex(pro => pro._id === item.index)
    if (index === 0) index = data.length

    setItem({ data: data[index - 1], index: data[index - 1]._id })
  }
  const handleRight = () => {
    let index = data.findIndex(pro => pro._id === item.index)
    if (index >= data.length - 1) index = -1

    setItem({ data: data[index + 1], index: data[index + 1]._id })
  }
  const handleSendProject = () => {
    window.localStorage.setItem('ToSeePro', JSON.stringify(item.index))
  }
  useEffect(() => {
    setItem({ data: data[0], index: data[0]._id })
  }, [data])

  return (
    <div className='container'>
      <h1 className='container_title'>{item.data.title}</h1>

      <div className='slide_container'>
        <img className='slide_container_arrow' src={left} alt='' onClick={handleLeft} />
        <SlideItem item={item.data} />
        <img className='slide_container_arrow' src={right} alt='' onClick={handleRight} />
      </div>

      <div>
        {
          footer && <Link className='slide_link' onClick={handleSendProject} to='/seePro'>See more information...</Link>
        }

      </div>

    </div>
  )
}
