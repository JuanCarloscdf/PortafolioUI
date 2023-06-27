
export const SlideItem = ({ item }) => {
  return (
    <div className='slide_item'>
      <div className='slide_item_info'>
        <p className='slide_item_info_p'>{item.description}</p>
      </div>
      <img className='slide_item_img' src={item.img} alt='' />
    </div>
  )
}
