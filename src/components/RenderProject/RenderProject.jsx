
import './rederproject.css'
export const RenderProject = ({ cards, update, updateCard, deleteCard }) => {
  return (

    <div className='card_container'>
      {
           cards.map((card, index) => {
             const rowReb = index % 2 !== 0 ? '' : 'reverse'
             return (
               <div key={card.title} className='card_main'>
                 {
                   index === 0
                     ? (
                       <div className='card_first_content'>
                         <h1 className='card_first_content_title'>{card.title}</h1>
                         <img className='card_first_img' src={card.img} alt='' />
                         <p className='card_first_content_info'>{card.description}</p>
                         <div>
                           {
                                update && (
                                  <div className='action_container'>
                                    <button onClick={() => updateCard(index, card)}> update </button>
                                    <button onClick={() => deleteCard(index, card)}> delete </button>
                                  </div>
                                )
                            }
                         </div>
                       </div>
                       )
                     : (
                       <div>
                         <div className={`card_content ${rowReb}`}>
                           <div className='card_info'>
                             <h2 className='card_title'>{card.title}</h2>
                             <p className='card_content_description'>{card.description}</p>
                           </div>
                           <img className='card_content_image' src={card.img} alt='' />

                         </div>
                         <div>
                           {
                                update && (
                                  <div className='action_container'>
                                    <button onClick={() => updateCard(index, card)}> update </button>
                                    <button onClick={() => deleteCard(index, card)}> delete </button>
                                  </div>
                                )
                            }
                         </div>
                       </div>
                       )
                 }
               </div>
             )
           })
        }
    </div>

  )
}
