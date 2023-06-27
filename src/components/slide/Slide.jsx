import './slide.css'
export const Slide = () => {
  const images = ['emqx', 'css3', 'git', 'html', 'js', 'mongo', 'mysql', 'react', 'types', 'node']

  function getImageUrl (name) {
    return new URL(`../../assets/img/${name}.svg`, import.meta.url).href
  }
  return (
    <article className='slide'>
      {
                images.map((icon) => {
                  return (
                    <img className='slide_icon' key={icon} src={getImageUrl(icon)} alt='' />
                  )
                })
            }
    </article>
  )
}
