import React from 'react'
import Playerliste from './Playerliste';
// import im1 from "./mustapha1.jpg"
function Players() {
    const players = [
        {
            // "img":im1,
            "img":"https://s.hs-data.com/bilder/spieler/gross/328958.jpg",
            "id": 1,
            "name": "Hakimi",
            "age": 34,
            "position": "Forward",
            "team": "Paris Saint-Germain",
            "nationality": "French"
        },
        {
            "img":"https://clipart.info/images/ccovers/1496248998cr7-real-madrid-cristiano-ronaldo-png.png",
            "id": 2,
            "name": "Cristiano Ronaldo",
            "age": 39,
            "position": "Forward",
            "team": "Al Nassr",
            "nationality": "Portuguese"
        },
        {
            "img":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eacb375e-4ffc-43c9-9c68-91c77ae4c1f7/dcr2q7j-2de42084-0877-4910-a335-dd7dc304a578.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VhY2IzNzVlLTRmZmMtNDNjOS05YzY4LTkxYzc3YWU0YzFmN1wvZGNyMnE3ai0yZGU0MjA4NC0wODc3LTQ5MTAtYTMzNS1kZDdkYzMwNGE1NzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4baGb5fQR8JqomOE6qwKH8JxmJ43NejYaiMqDMfSRco",
            "id": 3,
            "name": "Neymar Jr",
            "age": 32,
            "position": "Forward",
            "team": "Paris Saint-Germain",
            "nationality": "Brazilian"
        },
        {
            "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeLE7TVDVDmF7IWIWrxueo5fSVKXKVTNR7KN7ymZZ9Sg&s",
            "id": 4,
            "name": "Kylian Mbappe",
            "age": 25,
            "position": "Forward",
            "team": "Paris Saint-Germain",
            "nationality": "French"
        },
        {
            "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQD3sJjVEapzLtjoynhLr-v9kvZMktozQn4ChsMcbtw&s",
            "id": 5,
            "name": "Roberto Carlos",
            "age": 32,
            "position": "Forward",
            "team": "Real Madrid",
            "nationality": "Brazilian"
        },
        {
            "img":"https://wallpapers.com/images/featured/lionel-messi-png-t4vkls6byyyh0qim.jpg",
            "id": 6,
            "name": "Messi",
            "age": 25,
            "position": "Forward",
            "team": "Paris Saint-Germain",
            "nationality": "Argentinian"
        }
    ];
    
  return (
    <div>
      <Playerliste players={players} />
    </div>
  )
}

export default Players
