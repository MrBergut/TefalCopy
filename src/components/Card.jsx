import '../styles/card.css'

export default function Card({ onClick, name='name', src }) {
    return (
        <div className='card' onClick={onClick}>
            <p className='cardText'>{name}</p>
            <img className='cardImg' src={src} alt={src} width='75px' height='75px' />
        </div>
    );
}