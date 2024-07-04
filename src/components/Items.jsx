import React,{useState} from 'react'
let tItems=0;
// let x=5;
const Items = (props)=>{
    // const [tota,fintota] =useState(0);
    const [initial,updated]=useState(0);
    const Added=()=>{
        updated(initial+1);
         tItems=tItems+initial
    }
    const Deleted=()=>{
        if(initial===0){
            return;
        }
        updated(initial-1);
    tItems=tItems-initial;
    }
    // totls=tota;
    
    return(
        <>

    <div className="contai">
            <div className="itemarea">
                <div className="itemdetailes">
                    <div className="itemtitle">
                        <h1>{props.itemname}</h1>
                    </div>
                    <div className="itemprice">
                        <span>{props.price}</span>
                    </div>
                </div>
                <div className="left">
                       <div className="itemimg">
                    <img src={props.itemimage} alt=""/>

                </div>
                <div className="buttonsss">
                    <button onClick={Deleted}>-</button>
                 {initial}
                <button onClick={Added}>+</button>
                </div>
                </div>
             
            </div>
            </div>
            
        </>
    )
}
export const cvalue = tItems;


export default Items
