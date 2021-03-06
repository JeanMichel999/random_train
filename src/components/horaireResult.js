import './horaireResult.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';

/* mise en place props en liaison avec App.js */
function HoraireResult(props) {
  /* Mettre un useState pour fonctionner avec le UseEffet */
  const [horaires, setHoraires] = useState([])
  const [gareDepart, setGareDepart] = useState(props.departStation3)
  const [gareArrivee, setgareArrivee] = useState("")

  useEffect(() => {
    /* authentification + headers + dans le lien la variable gare de depart */
    axios.get(`https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:SNCF:${gareDepart}/departures?datetime=20220131T160312`, {
      headers
        : { Authorization: "8703df2c-baa8-49b3-a102-d2482abfb49a" }
    })
      .then((response) => {
        setHoraires(response.data.departures)
        filterHoraire(response.data.departures)
        console.log(response.data.departures)
      })
  }, [])


  /* Fonction pour trier l'horaire de départ */
  const transformHoraire = (heure) => {
    return heure.slice(9, -2).replace(/\B(?=(\d{2})+(?!\d))/g, ":");
  }

  /* Fonction pour recuperer la gare d'arrivée */
  const filterHoraire = (departures) => {
    const filterHoraires = departures.filter((transilien) => transilien.display_informations.code !== "N" && transilien.display_informations.network !== "RER" ).filter((filtre, index) => index === 0 || index === 1)
    setgareArrivee(filterHoraires[0])
    /* Props à changer et en connexion onchangeInput pour être récupérer dans pageResult ENfant vers Parent*/
    props.onchangeInput(filterHoraires[0].display_informations.direction.replace(/\(.[^(]*\)/g, '').slice(0,-1).replace("-"," ").replace("Gare de Lyon Hall 1 &2","").replace("Montparnasse Hall 1 & 2","")).slice(1,-1)
  }

  return (
    <div className='departures'>
      {/* Props venant le page accueil en passant par pageResult */}
      <span className="titre_depart">{props.liaison_n2}</span>
      {horaires.length > 0 && gareArrivee !== "" &&
        <ul>
          {/* On fait les filter pour filtrer l'api et ensuite un map pour afficher le resultat */}

          {/* créer un li Key puis un map pour lister les donner et sensuite les filtrer */}
          <li>
            <div className="horaireResult_depart">{gareArrivee.stop_point.name}</div>
              <div className='input_depart'>
                <div className='input'>Gare d'arrivée : {gareArrivee.display_informations.direction.replace(/\(.[^(]*\)/g, '').slice(0,-1).replace("-"," ")}</div>           
                <div className='input2'>Heure de départ : <span className="horaire">{transformHoraire(gareArrivee.stop_date_time.departure_date_time)}</span> </div>
                <div className='input'><marquee behavior="scroll" scrollamount="10">Numéro du train          {gareArrivee.display_informations.trip_short_name} - Train :&nbsp;<span className="horaire">{gareArrivee.display_informations.network}</span></marquee></div>
                <img className='logoSncf' src={'./images/sncf.jpg'} alt="icone SNCF" />
              </div>
          </li>

        </ul>


      }

      {/*   {gareArrivee!==""&&<h1>{gareArrivee.display_informations.direction}</h1>} */}
    </div >
  );
}
export default HoraireResult;