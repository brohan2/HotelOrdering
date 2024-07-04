import React from 'react'
import Items from '../components/Items'
import Birdata from '../Data/Birdata'

const sdata=(val)=>{
return(
    <Items catname={val.catname} itemname={val.itemname} price={val.price} itemimage={val.itemimage}/>
)
}
const Bircat=(props)=>{
return(
    <>
            <div className="catname">
    <h1>{props.catname}</h1>
</div>
    {/* <Items catname="Biryani" itemname="Paneer Biryani" price="100" itemimage={paneerimg}/>
    <Items catname="Biryani" itemname="Chicken Biryani" price="200" itemimage={chicken}/>
    <Items catname="Biryani" itemname="Paneer Biryani" price="100" itemimage={paneerimg}/> */}
    {Birdata.map(sdata)}
    </>
)
}
export default Bircat