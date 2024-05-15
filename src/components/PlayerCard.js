import React from 'react'
import Card from 'react-bootstrap/Card';
import './PlayerCard.css';
function PlayerCard({player}) {
  const alertHello=(name)=>alert(name)
  return (
    <div>
      <Card className="cards">
      <Card.Img className='im2' variant="top" src={player.img}/>
      <Card.Body className='bod1'>
        <Card.Title className="title"><h4>Player details</h4></Card.Title>
        <Card.Text>
         <h6>{player.id}</h6>
         <h6>{player.name}</h6>
         <h6>{player.age}</h6>
         <h6>{player.position}</h6>
         <h6>{player.team}</h6>
         <h6>{player.nationality}</h6>
        </Card.Text>
        <div id='btn2'>
        <button class="favorite styled" type="button" onClick={()=>alertHello("Your Favorite Player is added")}>Add to favorites</button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default PlayerCard
