import React from 'react'
import './Featured.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import FeaturedSummaryItem from './FeaturedSummaryItem'


function Featured() {
  return (
    <div className='featured'>
      <div className="featured__top">
        <h className="featued__title">Total Revenue</h>
        <MoreVertIcon />
      </div>
      <div className="featured__bottom">
        <div className="featured__chart">
          <CircularProgressbar value={70} text='70%' strokeWidth={5} />
        </div>
        <p className="featuredChart__title">Total sales made today</p>
        <p className="featuredChart__amount">$430</p>
        <p className="featuredChart__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit.</p>
        <div className="featured__summary">
          <FeaturedSummaryItem title={"Target"} Icon = {KeyboardArrowDownIcon} resultAmount = {"$12.4k"} isPositive={false} />
          <FeaturedSummaryItem title={"Target"} Icon = {KeyboardArrowUpOutlinedIcon} resultAmount = {"$12.4k"} isPositive={true} />
          <FeaturedSummaryItem title={"Target"} Icon = {KeyboardArrowUpOutlinedIcon} resultAmount = {"$12.4k"} isPositive={true} />
        </div>
      </div>
    </div>
  )
}

export default Featured