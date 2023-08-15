import '../styles/stock.css';

export default function Stock({ src, width='374px', height='139px' }) {
    return(
        <img className='stockimg' src={src} alt={src} width={width} height={height}/>
    );
}