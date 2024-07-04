import React from 'react'

export default function Catego(props) {
    return(
        <>
        {/* <div className="container"> */}
    <div className="box">
        <div className="image">
            <img src={props.birimg} alt=""/>
        </div>
        <div className="context">
            <div className="itemname">
                <span>{props.itemname}</span>
            </div>
            <div className="itemdescription">
                <span>{props.dis}</span>
            </div>
        </div>
        <div className="checkout">
            <a href={props.link}><button>Check Out</button></a>
            
        </div>
    {/* </div> */}
    </div>
        </>
    )
}