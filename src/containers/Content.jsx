import Card from "../components/Card";
import Button from "../components/Button";
import Stock from "../components/Stock";
import TransformImages from "../components/TransforImage";
import Offer from "../components/Offer";

import '../styles/content.css';
import careforyou from '../assets/images/care-for-you.png';
import flex from '../assets/images/flex.png';
import ingenio from '../assets/images/ingenio_new.png';
import ixeo from '../assets/images/ixeo-new.png';
import optigrill from '../assets/images/optigrill-new.png';
import giveAnEcertificate from '../assets/images/banner_0_62__main_page_action.webp';
import connectwithme from '../assets/images/banner_0_91__main_page_action.webp';
import againinschool from '../assets/images/banner_0_107__main_page_action.webp';
import product2236 from '../assets/images/product_2236_1.png';
import product2467 from '../assets/images/product_2467_1.jpg';
import product2643 from '../assets/images/product_2643_1.jpg';
import product2690 from '../assets/images/product_2690_1.png';
import product3489 from '../assets/images/product_3489_37.png';

export default function Content() {
    return (
        <>
            <main>
                <div className="content">
                    <div className="contentCards">
                        <Card name="CARE FOR YOU" src={careforyou}/>
                        <Card name="FLEX" src={flex} />
                        <Card name="IXEO POWER" src={ixeo} />
                        <Card name="INGENIO" src={ingenio} />
                        <Card name="OPTIGRILL" src={optigrill} />
                        <Button type="giftсertificate">
                            <p className="giftсertificatetext">Подарочный сертификат</p>
                            <svg width="80px" height="80px" class="MuiBox-root css-10klw3m" cursor="pointer" fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M8 26.6667C8 24.1525 8 22.8955 8.78104 22.1144C9.56211 21.3334 10.8192 21.3334 13.3333 21.3334H50.6667C53.1808 21.3334 54.4379 21.3334 55.2189 22.1144C56 22.8955 56 24.1525 56 26.6667V30.6667C56 31.9091 56 32.5304 55.7971 33.0206C55.5264 33.6739 55.0072 34.1931 54.3539 34.4638C53.8637 34.6667 53.2424 34.6667 52 34.6667C50.7576 34.6667 50.1363 34.6667 49.6461 34.8696C48.9928 35.1403 48.4736 35.6595 48.2029 36.3128C48 36.803 48 37.4243 48 38.6667V48C48 50.5142 48 51.7712 47.2189 52.5523C46.4379 53.3334 45.1808 53.3334 42.6667 53.3334H21.3333C18.8192 53.3334 17.5621 53.3334 16.781 52.5523C16 51.7712 16 50.5142 16 48V38.6667C16 37.4243 16 36.803 15.797 36.3128C15.5264 35.6595 15.0072 35.1403 14.3538 34.8696C13.8638 34.6667 13.2425 34.6667 12 34.6667C10.7575 34.6667 10.1362 34.6667 9.64619 34.4638C8.99277 34.1931 8.47363 33.6739 8.20299 33.0206C8 32.5304 8 31.9091 8 30.6667V26.6667Z" stroke="currentColor" stroke-width="3.04762"></path><path d="M13.5999 34.6666H50.9332" stroke="currentColor" stroke-width="3.04762" stroke-linecap="round"></path><path d="M32 18.6666V53.3333" stroke="currentColor" stroke-width="3.04762" stroke-linecap="round"></path><path d="M31.4667 18.6666L29.1237 16.3237C26.2803 13.4803 22.8139 11.3379 18.9989 10.0662C15.9493 9.04966 12.8 11.3196 12.8 14.5342V15.0198C12.8 17.1976 14.1936 19.1311 16.2596 19.8198L20.8 21.3332" stroke="currentColor" stroke-width="3.04762" stroke-linecap="round"></path><path d="M32.8 18.6666L35.1429 16.3237C37.9864 13.4803 41.4528 11.3379 45.2677 10.0662C48.3173 9.04966 51.4667 11.3196 51.4667 14.5342V15.0198C51.4667 17.1976 50.0731 19.1311 48.0069 19.8198L43.4667 21.3332" stroke="currentColor" stroke-width="3.04762" stroke-linecap="round"></path></svg>
                        </Button>
                    </div>
                    <div className="transformimages" >
                        <TransformImages></TransformImages>
                    </div>
                    <div className="stock">
                        <div className="stocktopbar">
                            <h2>АКЦИИ</h2>
                            <a href="./index.html">Посмотреть всё</a>
                        </div>
                        <div className="stockimages">
                            <Stock src={giveAnEcertificate} />
                            <Stock src={connectwithme} />
                            <Stock src={againinschool} />
                        </div>
                    </div>
                    <div className="offers">
                        <p className="offerstext">Бестеллеры</p>
                        <div className="offerscard">
                            <Offer src={product2236} name="утюг" price="2 480" oldprice="3 890" discount="-23%"/>
                            <Offer src={product2467} name="половая тряпка" price="1 698" oldprice="4 500" discount="-78%"/>
                            <Offer src={product2643} name="улучшенная половая тряпка" price="2 780" oldprice="6 900" discount="-66%"/>
                            <Offer src={product2690} name="французкий пылесос / сосёт за копейки" price="15 808" oldprice="21 500" discount="-31%"/>
                            <Offer src={product3489} name="освежитель воздуха" price="9 098" oldprice="4 500" discount="+51%"/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}