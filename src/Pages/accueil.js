import React from 'react';
import './accueil.css'
import  Logo from '../components/logo'
import { useState } from 'react';


// import { useNavigate } from "react-router-dom";


const Accueil = () => {
    const [title,setTitle]= useState(" ")
    // const navigate = useNavigate();
    
    
    function handleChangeInput(event){
        setTitle(event.target.value)
        {   <h1>{title}</h1>}}
            
            
//    if (LoggedIn){
//       return navigate("./Pages/pageGenerateur.js");
//    }
// [LoggedIn];
//         }
          // }
   
   
    return (
        <div className="container_accueil">

           <div className="item__accueil__logo">  

                <div className="accueil__logo">                
                    <Logo />
                </div>

                    <div className='accueil__select'>
                        <label for="select-city">Choisissez votre gare de départ :</label><br></br>

                        <select onChange={handleChangeInput}  name="city" id="select-city">
                            <option value="City">Ville</option>
                            <option value="PLY">Paris gare de Lyon</option>
                            <option value="MTP">Paris gare de Montparnasse</option>
                        </select>
                        
                    </div>
                    <form>  
        
        <h1>{title}</h1>
    </form>
            </div>

            <div className="items_accueil__carte">
                <img   className="image-carte" src='./Images/carteFrance.png' alt='image logo' /> 
            </div>
      
        </div>
    );
};

export default Accueil;