import foto01 from '../../images/01.png';
import foto02 from '../../images/02.png';
import foto03 from '../../images/03.png';
import foto04 from '../../images/04.png';
import logo2 from '../../images/cfee0016.svg';
import logo3 from '../../images/cafe.svg';
import listFoto from '../../utils/constans';
import {useState} from 'react';

import geolocation from '../../images/GEOLOCATION.svg';

function Promo() {
  const [countIndex, setCountIndex] = useState(0);

  return (
    <section className='Promo'>
      <h2 className='Promo__title'>Эксклюзивный доступ к событиям Самокатов</h2>
      <p className='Promo__text'>
        С абонементом — у вас доступ <br /> к специальным мероприятиям, скидки и
        классный мерч. В 2023 году мы танцевали на Даче Плюс <br /> с Антохой
        MC, катались на самокатах с Сергеем Мезенцевым и слушали хор Attaque de
        Panique
      </p>
      <div className='Promo__container'>
        <div className='Promo__element Promo__element_namber_one'>
          <img className='Promo__foto' src={foto01} alt='Фото трубача' />
          <img
            className='Promo__geolocation'
            src={geolocation}
            alt='Иконка геолокации'
          />
        </div>
        <div className='Promo__element Promo__element_namber_two'>
          <img className='Promo__foto' src={foto02} alt='Фото трубача' />
          <img className='Promo__logo2' src={logo2} alt='Иконка геолокации' />
        </div>
        <div className='Promo__element Promo__element_namber_three'>
          <img className='Promo__foto' src={foto03} alt='Фото трубача' />
        </div>

        <div className='Promo__element Promo__element_namber_four'>
          <img className='Promo__foto' src={foto04} alt='Фото трубача' />
          <img className='Promo__logo3' src={logo3} alt='Иконка геолокации' />
        </div>
      </div>
      <div className='Promo__wrapper'>
        <img alt='Логотип блока' className='Promo__foto-logo' src={logo2} />
        <img
          alt='Фото списка'
          className='Promo__foto-item'
          src={listFoto[countIndex]}
        />

        <div className='Promo__scrol'>
          <button
            disabled={countIndex <= 0 ? true : false}
            type='button'
            onClick={() => setCountIndex(countIndex - 1)}
            className='Promo__scrol-left'
          ></button>
          <button
            disabled={listFoto.length - 1 === countIndex ? true : false}
            type='button'
            onClick={() => setCountIndex(countIndex + 1)}
            className='Promo__scrol-right'
          ></button>
        </div>
      </div>
    </section>
  );
}

export default Promo;
