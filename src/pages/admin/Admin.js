import React, { useState } from 'react'
import SideMenu from '../../components/SideMenu'

const Admin = () => {
  const [ page, setPage ] = useState('pedidos');
  
  return (
    <div>
      <SideMenu page={page}/>
    </div>
  )
}

export default Admin