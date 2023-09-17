import samocat1 from '../../images/samocat1.svg';
import samocat2 from '../../images/cfee0015.png';
import plus from '../../images/PLUS_010_0050.svg';

function Acquire() {
  return (
    <section className='Acquire'>
      <div className='Acquire__block'>
        <h2 className='Acquire__title'>
          Купить абонемент <br /> и вступить <br /> в клуб смогут те, кто в
          Плюсе
        </h2>
        <p className='Acquire__text'>
          За каждую поездку на самокатах такие пользователи получают кешбэк
          баллами. Баллы можно тратить на поездки на самокатах и такси с Яндекс
          Go, покупки и заказы в других сервисах Яндекса
        </p>
        <img
          className='Acquire__logo Acquire__logo-samocat'
          src={samocat1}
          alt='Самокат'
        />
      </div>
      <div className='Acquire__block Acquire__block-two'>
        <div className='Acquire__wrapper'>
          <img
            className='Acquire__logo Acquire__logo-samocat-2'
            src={samocat2}
            alt='Самокат'
          />
          <img className='Acquire__logo-plus' src={plus} alt='Плюс' />
        </div>
        <h2 className='Acquire__title Acquire__title-two'>
          80 % наших пользователей уже в клубе <br />и экономят <br /> на
          поездках
        </h2>
        <p className='Acquire__text Acquire__text-two'>
          Присоединяйтесь — опция начнёт действовать в начале сезона–2024. Об
          открытии сезона предупредим заранее, чтобы вы были готовы
        </p>
        <button className='Acquire__button'>Хочу абонемент</button>
      </div>
    </section>
  );
}

export default Acquire;
