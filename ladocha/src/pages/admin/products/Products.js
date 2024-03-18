import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom'
import DataTable from '../../../components/admin/dataTable/DataTable'
import { productColumns, productRows } from './productDataSource'
import AddIcon from '@mui/icons-material/Add';
import PageBanner from '../../../components/admin/pagebanner/PageBanner'

function Products() {
  return (
    <div className='products'>
      <div className="products__container">
        <PageBanner leftText={"Products List"} LeftIcon={""} rightText={"Add New"} RightIcon={AddIcon} slug={"/products/addProduct"} />
        <DataTable columns={productColumns} rows={productRows} slug="products" />
      </div>
    </div>
  )
}

export default Products