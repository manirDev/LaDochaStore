import React from 'react'
import './Featured.css'

function FeaturedSummaryItem({title, Icon, resultAmount, isPositive}) {
    return (
        <div className="featuredSummary__item">
            <div className="featuredSummaryItem__title">{title}</div>
            <div className={`featuredSummaryItem__result ${isPositive ? "featuredSummaryItem__positive" : "featuredSummaryItem__negative"}`}>
                <Icon fontSize='small' />
                <div className="featuredSummaryItemResult__amount">{resultAmount}</div>
            </div>
        </div>
    )
}

export default FeaturedSummaryItem