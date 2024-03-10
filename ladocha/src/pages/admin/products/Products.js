import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom'
import DataTable from '../../../components/admin/dataTable/DataTable'
import { productColumns, productRows } from './productDataSource'
function Products() {
  return (
    <div className='products'>
      <div className="products__container">
        <div className="datatableTitle">
          Add New Product
          <Link to="/products/addUser" className="link">
            Add New
          </Link>
        </div>
        <DataTable columns={productColumns} rows={productRows} slug="products" />
      </div>
    </div>
  )
}

export default Products