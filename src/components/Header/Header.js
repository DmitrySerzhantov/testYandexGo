import logo from '../../images/logo/YandexGoRublack.svg';
import textСircle from '../../images/logo/textСircle.svg';
import smkt from '../../images/smkt.svg';


function Header() {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип' />
      <h1 className='header__title'>Вступайте в клуб Самокатов</h1>
      <p className='header__text'>
        Купите абонемент, чтобы стать частью клуба в новом сезоне–2024. 8
        месяцев за <span className='header__newPrice'>499₽</span>
        <span className='header__price'>3190₽</span>
      </p>
      <button className='header__button'>Стать частью клуба</button>
      <div id='imgSmkt' className='header__imgSmkt'>
      <img  className='header__smkt' alt='textСircle' src={smkt} />

        <img className='header__textСircle' alt='textСircle' src={textСircle} />
      </div>
    </header>
  );
}
export default Header;
