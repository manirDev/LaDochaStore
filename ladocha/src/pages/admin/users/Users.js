import React from 'react'
import './Users.css'
import DataTable from '../../../components/admin/dataTable/DataTable'
import { userColumns, userRows } from '../../../pages/admin/users/usersDataSource';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';


function Users() {
  return (
    <div className='users'>
      <div className="users__container">
        <div className="datatableTitle">
          Add New User
          <Link to="/users/addUser" className="usersAdd__link">
            <AddIcon />
            Add New
          </Link>
        </div>
        <DataTable columns={userColumns} rows={userRows} slug="users" />
      </div>
    </div>
  )
}

export default Users