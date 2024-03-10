import React from 'react'
import "./Widget.css"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

function Widget({ type }) {
    let data;

    //temporary
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <PersonOutlinedIcon
                        className="widget__icon"
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }}
                    />
                ),
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (
                    <ShoppingCartOutlinedIcon
                        className="widget__icon"
                        style={{
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                            color: "goldenrod",
                        }}
                    />
                ),
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: (
                    <MonetizationOnOutlinedIcon
                        className="widget__icon"
                        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                    />
                ),
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: (
                    <AccountBalanceWalletOutlinedIcon
                        className="widget__icon"
                        style={{
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                            color: "purple",
                        }}
                    />
                ),
            };
            break;
        default:
            break;
    }
    return (
        <div className='widget'>
            <div className="widget__left">
                <span className="widget__title">{data.title}</span>
                <span className="widget__counter">
                    {data.isMoney && "$"} {amount}
                </span>
                <span className="widget__link">{data.link}</span>
            </div>
            <div className="widget__right">
                <div className="widget__percentage widget__positive">
                    {diff < 0 ?
                        <KeyboardArrowDownIcon style={{color:"tomato"}} />
                    :
                        <KeyboardArrowUpIcon  style={{color:"limegreen"}} />
                    }  
                    <span style={{color: diff < 0 ? "tomato" : "limegreen"}}>{diff}%</span>
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget