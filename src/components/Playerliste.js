import React from 'react'
import PlayerCard from './PlayerCard'
import './Playerliste.css'


function Playerliste({players}) {
  console.log(players)
  return (
    <div className='cardd'>
     {players.map((el)=><PlayerCard player={el}/>)}
    </div>
  )
}

export default Playerliste
