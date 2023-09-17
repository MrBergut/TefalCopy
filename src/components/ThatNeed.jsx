import '../styles/thatNeed.css'

export default function ThatNeed({ category='категория', src}) {
    return (
        <div className='that_need'>
            <div className='that_need_category'>
                <p>{category}</p>
            </div>
            <div className='that_need_image'>
                <img src={src} alt={src} width='160px' height='160px'/>
            </div>
        </div>
    );
}