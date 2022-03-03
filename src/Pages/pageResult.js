import React from 'react';
import Logo from '../components/logo';
import './pageResult.css'
import HoraireResult from '../components/horaireResult'
import CityResult from '../components/cityResult'
import MeteoResult from '../components/meteoResult'
import LoisirsResult from '../components/loisirsResult'
import { useState } from 'react';




/* mise en place props (liaison) pour app vers pageResult pour ensuite horaireresult */
const PageResult = (props) => {
    const [station, setstation] = useState(props.departStation2)
    /*creation const pour alimenter la gare arrivée avec usestate */
    const [arrivee1, setarrivee1] = useState("")
    /*Function Recuperation gare arrivée  de enfant à Parent */
    const gareArrivee2 = (gareArrivee) => { setarrivee1(gareArrivee) }
    console.log(gareArrivee2)
    /*Function Recuperation gare arrivée  de enfant à Parent */
    return (
        <div className='imageDepart2'>
            <div className='containerA'>
                <Logo />
                <div className='flex-container-resultat' >
                    <div className='flex-items-resultat-gauche '  >
                        {/* Recuperation gare arrivée avec le onchangeInput de horaireResult -   de enfant à Parent */}
                        <HoraireResult liaison_n2={props.liaison} departStation3={props.departStation2}
                            onchangeInput={gareArrivee2} />
                    </div>
                    <div className='flex-items-resultat-droite '  >
                        {/* Envoi à enfant meteoResult de l'arrivee1 qui est repris dans la function useState */}
                        <MeteoResult arrivee={arrivee1} />
                    </div>
                </div>
            </div>
            <h1>{gareArrivee2}</h1>
        </div>
    );
};
export default PageResult;