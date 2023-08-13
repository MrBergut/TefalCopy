import '../styles/icon.css'

export default function Icon({ src }) {
    return (
        <img src={src} alt={src} width='22px' height='22px' />
    );
}