import React from 'react'
import Bodydata from '../Data/Bodydata'
import Catego from '../components/Catego'

const smap=(val)=>{
    return(
        <Catego birimg={val.birimg} 
        itemname={val.itemname}
        dis={val.dis}
        link={val.link}/>
    )
}
const Body = ()=>{
    return(
        <>
            <div className="container">
    {/* <Catego birimg={birimg} itemname="Biryani" dis="taste best Biryani" link='/biryani'/>
    <Catego birimg={salad} itemname="Salad" dis="taste best Salad"/>
    <Catego birimg={tandoori} itemname="Tandoori" dis="taste best Tandoori"/>
    <Catego birimg={pizza} itemname="Pizza" dis="taste best Pizza"/> */}
    {Bodydata.map(smap)}
    </div>
        </>
    )
}
export default Body