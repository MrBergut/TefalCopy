import '../styles/offer.css'

export default function Offer({ discount='скидка', src, name='название', price='цена', oldprice='старая цена'}) {
    return (
        <div className='offer'>
            <div className='discount'>
                <p>{discount}</p>
            </div>
            <div className='offerimg'>
                <img src={src} alt={src} width='160px' height='160px'/>
            </div>
            <div className='name'>
                <p>{name}</p>
            </div>
            <div className='prices'>
                <p className='price'>{price} &#8381;</p>
                <p className='old-price'>{oldprice} &#8381;</p>
            </div>
        </div>
    );
}