import React from 'react'
import './Users.css'
import DataTable from '../../../components/admin/dataTable/DataTable'
import { userColumns, userRows } from '../../../pages/admin/users/usersDataSource';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import PageBanner from '../../../components/admin/pagebanner/PageBanner';


function Users() {
  return (
    <div className='users'>
      <div className="users__container">
        <PageBanner leftText={"Users List"} LeftIcon={""} rightText={"Add New"} RightIcon={AddIcon} slug={"/users/addUser"} />
        <DataTable columns={userColumns} rows={userRows} slug="users" />
      </div>
    </div>
  )
}

export default Users