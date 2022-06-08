import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPirate =(props)=>{

    const {pirates,setPirates} = props;

    const [name,setName] = useState("");
    const [url,setUrl] = useState("");
    const [treasureChests,setTreasureChests] = useState("");
    const [phrase,setPhrase] = useState("");
    const [position,setPosition] = useState("Captain");

    const [errors,setErrors] = useState({});

    const [pegLeg,setPeg] = useState("Yes");
    const [eyePatch,setEye] = useState("Yes");
    const [hookHand,setHook] = useState("Yes");

    const navigate = useNavigate(); 


    const submitNew=(e)=>{
        e.preventDefault();
        axios.post(("http://localhost:8000/api/createNew"),
        {name,url,treasureChests,phrase,position,pegLeg,eyePatch,hookHand})
        .then((res)=>{
            setPirates([...pirates, res.data])
            navigate("/pirates")
        })
        .catch((err)=>{
            console.log("Error in Add new "+err);
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        })
    }

    const DashboardHandler=(e)=>{
        e.preventDefault();
        navigate("/pirates")
    }

    const pegChecker=(e)=>{
        if(e.target.checked){
            setPeg("Yes")
        }
        else{
            setPeg("No")
        }
    }

    const eyeChecker=(e)=>{
        if(e.target.checked){
            setEye("Yes")
        }
        else{
            setEye("No")
        }
    }

    const hookChecker=(e)=>{
        if(e.target.checked){
            setHook("Yes")
        }
        else{
            setHook("No")
        }
    }

    return(
        <div className='App'>
            <div className='newHeader'>
                <span>Add Pirate</span>
                <button onClick={(e)=>DashboardHandler(e)}>Crew Board</button>
            </div>
            <form className='form' onSubmit={(e)=>submitNew(e)}>
                <div className='Add'>
                    <div>
                        <label htmlFor="pirateName" className={"label"}>Pirate name </label>
                        <br/>
                        <input type="text" id="pirateName" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        {name.length === 0 ? (<p className={"error"}>Name is required</p>) : null}
                        {errors.name&& <p className={"error"}>{errors.name.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="url" className={"label"}>Image URL</label>
                        <br/>
                        <input type="text" id="url" value={url} onChange={(e)=>{setUrl(e.target.value)}}/>
                        {url.length === 0 ? (<p className={"error"}>Image URL is required</p>) : null}
                        {errors.url&& <p className={"error"}>{errors.url.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="chests" className={"label"}># of Treasure Chests</label>
                        <br/>
                        <input type="number" className={"number"} id="chests" value={treasureChests} onChange={(e)=>{setTreasureChests(e.target.valueAsNumber)}}/>
                        {treasureChests.length === 0 ? (<p className={"error"}>Number of Treasure Chest is required</p>) : null}
                        {errors.treasureChests&& <p className={"error"}>{errors.treasureChests.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="phrase" className={"label"}>Pirate Catch Phrase</label>
                        <br/>
                        <input type="text" id="phrase" value={phrase} onChange={(e)=>{setPhrase(e.target.value)}}/>
                        {phrase.length === 0 ? (<p className={"error"}>Pirate Catch Phrase is required</p>) : null}
                        {errors.phrase&& <p className={"error"}>{errors.phrase.message}</p>}
                    </div>
                </div>
                <div className='Add'>
                    <div classname={"select"}>
                        <label name="PositionList" className={"label"}>Crew Position</label>
                        <br/>
                        <select className={"label"} onChange={(e)=>{setPosition(e.target.value)}}>
                            <option className={"label"} value="Captain">Captain</option>
                            <option className={"label"} value="First Mate">First Mate</option>
                            <option className={"label"} value="Quarter Master">Quarter Master</option>
                            <option className={"label"} value="Boatswain">Boatswain</option>
                            <option className={"label"} value="Powder Monkey"></option>
                        </select>
                    </div>
                    <div className={"pegLeg"}>
                        <input type="checkbox" id="pegLeg" value={pegLeg} onChange={(e)=>pegChecker(e)} defaultChecked />
                        <label htmlFor="pegLeg" className={"label"}>Peg Leg</label>
                    </div>
                    <div>
                        <input type="checkbox" id="eyePatch" value={eyePatch} onChange={(e)=>eyeChecker(e)} defaultChecked/>
                        <label htmlFor="eyePatch" className={"label"}>Eye Patch</label>
                    </div>
                    <div>
                        <input type="checkbox" id="hookHand" value={hookHand} onChange={(e)=>hookChecker(e)} defaultChecked/>
                        <label htmlFor="hookHand" className={"label"}>Hook Hand</label>
                    </div>
                    <button className={"addButton"}>Add Pirate</button>
                </div>
            </form>
        </div>
    );
}

export default NewPirate;