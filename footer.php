
</main>
<footer class="footer">
    <div class="container">
        <div class="footer__top">
            <div class="null-block"></div>
            <div class="footer__column">
                <nav class="footer-menu">
                    <ul class="footer-menu__list">
                        <li class="footer-menu__item">
                            <a href="" class="footer-menu__link footer-menu__link--active">Главная</a>
                        </li>
                        <li class="footer-menu__item">
                            <a href="" class="footer-menu__link ">О компании</a>
                        </li>
                        <li class="footer-menu__item">
                            <a href="" class="footer-menu__link ">Контакты</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="footer__column">
                <button type="button" class="button footer__callback" data-modal="callback" aria-label="Обратная свзяь">
                    Обратная связь
                </button>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="footer__contacts">
                <a href="tel:+7 (900) 123-45-67" class="footer__contacts-item footer__contacts-item--phone">
                    <img src="/assets/svg/header__phone.svg" alt="" class="footer__contacts-icon">
                    <span>+7 (900) 123-45-67</span>
                </a>
                <a href="mailto:info@autoservice.ru" class="footer__contacts-item footer__contacts-item--mail">
                    <img src="/assets/svg/mail.svg" alt="" class="footer__contacts-icon">
                    <span>info@autoservice.ru</span>
                </a>
            </div>
            <div class="footer__copyright">
                © 2025 АМ Сервис. Все права защищены.
            </div>
        </div>
    </div>
</footer>
<div class="overlay"></div>
<div class="modal modal--callback" data-modal="callback">
    <div class="modal__container">
        <button class="modal__close">
            <img src="/assets/svg/close-modal.svg" alt="" class="svg">
        </button>
        <div class="modal__header">
            <h2 class="modal__title">
                Форма обратной связи
            </h2>
            <div class="modal__text">
                Оставьте заявку — и мы свяжемся с вами в ближайшее время, чтобы уточнить детали и
                подобрать оптимальное решение для вашего грузового автомобиля.
            </div>
        </div>
        <div class="modal__body">
            <form action="" class="form form__modal">
                <div class="form__body">
                    <div class="form__group">
                        <input class="form__input" type="text" name="name" placeholder="Имя" required>
                    </div>
                    <div class="form__group">
                        <input class="form__input" type="text" name="phone" placeholder="Номер телефона" data-phone-mask required>
                    </div>
                </div>
                <div class="form__footer">
                    <button class="form__submit button" type="submit">
                        Заказать звонок
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
<script src="/assets/js/swiper-bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>
<script src="/assets/js/scripts.js"></script>
</body>
</html>