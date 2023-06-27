
import trash from '../../assets/img/trash.svg'
import pencil from '../../assets/img/pencil.svg'
import './listprojects.css'

export const ListProjects = ({ listData, deleteProject, updateProject }) => {
  return (
    <div className='listprojects_container'>
      <h1>Projects List</h1>
      <table className='list_table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>borrar</th>
            <th>actualizar</th>
          </tr>
        </thead>
        <tbody>
          {
                listData.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <td>{item.cards[0].title}</td>
                      <td><img className='li_icon list_icon' onClick={() => deleteProject({ id: item._id })} src={trash} alt='' /></td>
                      <td><img className='li_icon list_icon' onClick={() => updateProject({ id: item._id })} src={pencil} alt='' /></td>
                    </tr>

                  )
                })
         }
        </tbody>
      </table>

    </div>
  )
}
