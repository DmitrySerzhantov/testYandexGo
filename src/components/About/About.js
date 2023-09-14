import logo_P from '../../images/logo/0P.svg';
import logo_battery from '../../images/logo/battery.svg';
import logo_scooter from '../../images/logo/scooter.svg';
import logo_watch from '../../images/logo/watch.svg';

function About() {
  return (
    <section className='About'>
      <h2 className='About__title'>Вот что даёт участие в клубе</h2>
      <ul className='About__list'>
        <li className='About__item'>
          <img className='About__logo' alt='Логотип 0 руб.' src={logo_P}></img>
          <p className='About__text'>0 ₽ за старт в каждой поездке</p>
        </li>

        <li className='About__item'>
          <img
            className='About__logo'
            alt='Лготип скутер'
            src={logo_scooter}
          ></img>
          <p className='About__text'>
            Катаетесь с друзьями? Бронируйте до трёх самокатов с аккаунта с
            абонементом — так у всех будет бесплатный старт
          </p>
        </li>
        <li className='About__item'>
          <img
            className='About__logo'
            alt='Логотип часы'
            src={logo_watch}
          ></img>
          <p className='About__text'>
            Бесплатная пауза 15 минут в поездке — например, чтобы зайти за кофе
            или передохнуть
          </p>
        </li>
        <li className='About__item'>
          <img
            className='About__logo'
            alt='Логотип батарейки'
            src={logo_battery}
          ></img>
          <p className='About__text'>
            Если самокат недостаточно заряжен или с ним неудобно переходить
            дорогу, замените по пути на другой — это бесплатно
          </p>
        </li>
      </ul>
    </section>
  );
}

export default About;
