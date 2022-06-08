import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage =(props)=>{

    const navigate = useNavigate();

    const {pirates,setPirates} = props;
    const {deletePirate} = props;

    useEffect(()=>{
        axios.get(("http://localhost:8000/api/showAll"))
        .then((res)=>{
            setPirates(res.data);
        })
        .catch((err)=>console.log(err))
    },[])

    const deleteHandler=(idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/deleteOne/${idFromBelow}`)
            .then((res)=>{
                deletePirate(idFromBelow);
            })
            .catch((err)=>console.log(err))
        }

    const AddNewHandler=(e)=>{
        e.preventDefault();
        navigate("/pirate/new")
    }
    
    const viewHandler=(e,idFromBelow)=>{
        e.preventDefault();
        navigate(`/pirate/${idFromBelow}`);
    }

    return(
        <div className='new'>
            <div className='newHeader'>
                <span>Pirate Crew</span>
                <button onClick={(e)=>AddNewHandler(e)}>Add Pirate</button>
            </div>
            <div className={"pirateBorder"}>
                {pirates&&
                pirates.map((elems,index)=>{
                    return(
                        <div key={index} className={"pirateBg"}>
                            <div className={"pirate"}>
                                <div>
                                    <img src={elems.url} alt={`Pirate ${elems.name}`} className={"piratePic"}></img>
                                </div>
                                <div>
                                    <h4 className={"pirateName"}>{elems.name}</h4>
                                    <button className={"viewButton"} onClick={(e)=>viewHandler(e,elems._id)}>View Pirate</button> 
                                    <button className={"deleteButton"} onClick={(e)=>deleteHandler(elems._id)}>Walk the Plank</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <br/>
            {/* <button onClick={(e)=>newHandler(e)}>Add new project</button> */}
        </div>
        
    );
}

export default Homepage;