import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OnePirate = (props)=>{

    const [showPirate,setShowPirate]= useState({});
    const {name,url,treasureChests,phrase,position,pegLeg,eyePatch,hookHand} = showPirate;
    
    const {pirateId}= useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/showOne/${pirateId}`)
        .then((res)=>{
            setShowPirate(res.data[0])
        })
        .catch((err)=>console.log(err))
    },[])

    return(
        <div className="new">
            <div className='oneHeader'>
                <h1>{name}</h1>
            </div>
            <div className="pirateInfo">
                <div>
                    <img src={url} alt={`Pirate ${name}`} className={"onePiratePic"}></img>
                    <h1>"{phrase}"</h1>
                </div>
                <div className="pirateAbout">
                    <h2>About</h2>
                    <p>Position: {position}</p>
                    <p>Treasures: {treasureChests}</p>
                    <p>Peg Leg: {pegLeg}</p>
                    <p>Eye Patch: {eyePatch}</p>
                    <p>Hook Hand: {hookHand}</p>
                    <p><Link to={"/pirates"}>Back to Crew Board</Link></p>
                </div>
            </div>
        </div>
    )
}

export default OnePirate;