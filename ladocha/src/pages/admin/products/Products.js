import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom'
import DataTable from '../../../components/admin/dataTable/DataTable'
import { productColumns, productRows } from './productDataSource'
import AddIcon from '@mui/icons-material/Add';

function Products() {
  return (
    <div className='products'>
      <div className="products__container">
        <div className="datatableTitle">
          Add New Product
          <Link to="/products/addProduct" className="productAdd__link">
            <AddIcon />
            Add New
          </Link>
        </div>
        <DataTable columns={productColumns} rows={productRows} slug="products" />
      </div>
    </div>
  )
}

export default Products