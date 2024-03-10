import React from 'react'
import './Home.css'
import Widget from '../../../components/admin/widget/Widget'
import Featured from '../../../components/admin/featured/Featured'
import Chart from '../../../components/admin/chart/Chart'
import TransactionTable from '../../../components/admin/transactions/TransactionTable'

function Home() {
  return (
    <div className='home'>
      <div className="home__widgets">
        <Widget type = {"user"} />
        <Widget type = {"order"} />
        <Widget type = {"earning"} />
        <Widget type = {"balance"} />
      </div>
      <div className="home__charts">
        <Featured />
        <Chart />
      </div>
      <div className="home__listContainer">
        <div className="homeListContainer__title">Latest Transactions</div>
        <TransactionTable />
      </div>
    </div>
  )
}

export default Home