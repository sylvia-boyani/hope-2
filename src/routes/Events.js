import {useState} from 'react'

function Events(){
const [cards] = useState([
    {
        title: 'Card-1',
        text: `Lorem ipsum dolor sit amet,
         consectetur adipiscing elit.
         In fringilla dictum nunc, id feugiat 
         ex pharetra fermentum. Interdum et malesuada fames`
    },
    {
        title: 'Card-2',
        text: `Lorem ipsum dolor sit amet,
         consectetur adipiscing elit.
         In fringilla dictum nunc, id feugiat 
         ex pharetra fermentum. Interdum et malesuada fames`
    },
    {
        title: 'Card-3',
        text: `Lorem ipsum dolor sit amet,
         consectetur adipiscing elit.
         In fringilla dictum nunc, id feugiat 
         ex pharetra fermentum. Interdum et malesuada fames`
    },
    {
        title: 'Card-4',
        text: `Lorem ipsum dolor sit amet,
         consectetur adipiscing elit.
         In fringilla dictum nunc, id feugiat 
         ex pharetra fermentum. Interdum et malesuada fames`
    },
    {
        title: 'Card-6',
        text: `Lorem ipsum dolor sit amet,
         consectetur adipiscing elit.
         In fringilla dictum nunc, id feugiat 
         ex pharetra fermentum. Interdum et malesuada fames`
    },
    {
        title: 'Card-7',
        text: `Lorem ipsum dolor sit amet,
         consectetur adipiscing elit.
         In fringilla dictum nunc, id feugiat 
         ex pharetra fermentum. Interdum et malesuada fames`
    },
    
])

    return (
        <div>
            <section>
                <div className="container">
                    <h1>Responsive cards</h1>
                    <div className="cards">
                        {cards.map((card, i) => (
                             <div key={i} className="card">
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </div>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    )
}



export default Events;