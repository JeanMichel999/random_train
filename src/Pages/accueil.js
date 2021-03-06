import React from 'react';
import './accueil.css'
import Logo from '../components/logo'
import { useState } from 'react';



const Accueil = (props) => {
    const [title, setTitle] = useState(" ")
    return (

        <div className="container_accueil">
          

            <div className="item__accueil__logo">

                <div className="accueil__logo">
                    <Logo />
                    <div className='texte'><strong>C'est le week-end et vous ne savez pas où partir ?</strong><br />
                        Nous vous proposons votre destination la plus rapide en train.<br />
                        Et la météo pour vous mieux vous préparer !
                    </div>
                </div>

                <div className='accueil__select'>
                    <label htmlFor="select-city" className='choississez'>Choisissez votre gare de départ :</label>

                    <select
                        /* je joins inputGare de accueil.js et app.js */
                        onChange={event => props.inputGare(event.target.value)}
                        name="city"
                        id="select-city">
                        <option value="City">Ville</option>
                        <option value="87391003">Gare de Montparnasse</option>
                        <option value="87686006">Paris gare de Lyon</option>
                        <option value="87286005">Gare de Lille Flandres</option>
                        <option value="87481002">Gare de Nantes</option>
                        <option value="87751008">Gare de Marseille</option>
                        <option value="87611004">Gare de Toulouse</option>
                        <option value="87688887">Gare de Montpellier</option>
                        <option value="87723197">Lyon Part-Dieu</option>
                    </select>
                    <div className='container_logo'>
                    <img className='logoSncf' src={'./images/sncf.jpg'} alt="icone SNCF" />
                    </div>
                </div>
                <form>

                    <h3 className='codeGare'>{title}</h3>
                </form>
            </div>

            <div className="items_accueil__carte">
                <img className="image-carte" src='./Images/carteFrance.png' alt='image logo' />
            </div>
           
        </div>
    );
};

export default Accueil;