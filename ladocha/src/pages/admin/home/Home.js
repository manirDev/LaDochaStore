import React from 'react'
import './Home.css'
import Widget from '../../../components/admin/widget/Widget'
import Featured from '../../../components/admin/featured/Featured'
import Chart from '../../../components/admin/chart/Chart'
import TransactionTable from '../../../components/admin/transactions/TransactionTable'
import ChartBox from '../../../components/admin/chartbox/ChartBox'
import { chartBoxConversion, chartBoxUser, chartBoxProduct, chartBoxRevenue } from '../../../components/admin/chartbox/chartBoxDataSource'
import { Link } from 'react-router-dom'
import PageBanner from '../../../components/admin/pagebanner/PageBanner'
import TopWidget from '../../../components/admin/widget/TopWidget'



function Home() {
  return (
    <div className='home'>
      {/* <PageBanner leftText={"Home"} LeftIcon={""} rightText={"Home"} RightIcon={""} slug={"/"} /> */}
      {/* <div className="home__topWidget">
        <TopWidget />
      </div> */}
      <div className="home__widgets">
        {/* <Widget type={"user"} /> */}
        <Widget type={"order"} />
        <Widget type={"earning"} />
        <Widget type={"balance"} />
      </div>
      <div className="home__charts">
        <div className="featuredHome__charts">
          <div className="box box2"> <ChartBox {...chartBoxUser} /> </div>
          <div className="box box3"> <ChartBox {...chartBoxConversion} /> </div>
          <div className="box box2"> <ChartBox {...chartBoxRevenue} /> </div>
          <div className="box box3"> <ChartBox {...chartBoxProduct} /> </div>
          {/* <Featured /> */}
        </div>
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