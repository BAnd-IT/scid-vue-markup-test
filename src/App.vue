<template>
  <div class="app">
    <div class="app__container">
      <!-- Heading -->
      <div class="app__heading">
        <div class="app__heading-logo">
          <router-link to="/" class="app__heading-logo-link">
            <img src="@/assets/images/logo.svg" alt="SCID logo" />
          </router-link>
        </div>

        <!-- Heading navigation -->
        <div class="app__heading-nav">
          <ul class="heading-nav">
            <li class="heading-nav__item">
              <router-link to="/services" class="heading-nav__item-link">
                Кейсы
              </router-link>
            </li>
            <li class="heading-nav__item">
              <router-link to="/services" class="heading-nav__item-link">
                <i class="heading-nav__item-icon"
                  ><svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.59454 5.75211L7 0.5L5.40546 5.75211H0L4.37311 9.15247L2.7496 14.5L7 11.195L11.2504 14.5L9.62689 9.15247L14 5.75211H8.59454Z"
                      fill="#00A76B"
                    /></svg></i
                >Бизнесу
              </router-link>
            </li>
            <li class="heading-nav__item">
              <router-link to="/services" class="heading-nav__item-link"
                >Услуги</router-link
              >
            </li>
            <li class="heading-nav__item">
              <router-link to="/services" class="heading-nav__item-link"
                >Контакты</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Heading action button -->
        <div class="app__heading-action">
          <button class="ui-button ui-button--primary">Заказать звонок</button>
        </div>
      </div>

      <!-- Main content area -->
      <div class="app__main">
        <router-view />
      </div>

      <!-- Footer -->
      <div class="app__footer">
        <div class="app__footer-tile">
          <!-- Footer logo -->

          <div class="app__footer-tile-logo">
            <div class="footer-logo" />
          </div>

          <div class="app__footer-tile-links">
            <!-- CONTACTS -->
            <div class="footer-section">
              <div class="footer-section__title">Для связи</div>
              <div class="footer-section__list footer-section__list--extended">
                <a href="tel:+79261266457" class="footer-section__list-item">
                  <i
                    class="footer-section__list-item-icon footer-section__list-item-icon--whatsapp"
                  />
                  7 (926) 126-64-57
                </a>

                <a href="tel:+79261266457" class="footer-section__list-item">
                  <i
                    class="footer-section__list-item-icon footer-section__list-item-icon--sms"
                  />
                  7 (926) 126-64-57
                </a>

                <a href="tel:+79261266457" class="footer-section__list-item">
                  <i
                    class="footer-section__list-item-icon footer-section__list-item-icon--telegram"
                  />
                  7 (926) 126-64-57
                </a>
              </div>
            </div>

            <!-- NAVIGATION -->
            <div class="footer-section">
              <div class="footer-section__title">Компания</div>
              <div class="footer-section__list">
                <router-link to="/services" class="footer-section__list-item"
                  >Услуги</router-link
                >

                <router-link to="/services" class="footer-section__list-item"
                  >Кейсы</router-link
                >

                <router-link to="/services" class="footer-section__list-item"
                  >Контакты</router-link
                >

                <router-link to="/services" class="footer-section__list-item"
                  >Сотрудничество</router-link
                >
              </div>
            </div>

            <!-- DOCUMENTS -->
            <div class="footer-section">
              <div class="footer-section__title">Документы</div>
              <div class="footer-section__list">
                <router-link to="/services" class="footer-section__list-item"
                  >Политика конфиденциальности</router-link
                >

                <router-link to="/services" class="footer-section__list-item"
                  >Пользовательское соглашение</router-link
                >
              </div>
            </div>

            <!-- STAY INFORMED  -->
            <div class="footer-section">
              <div class="footer-section__title">Будьте в курсе</div>

              <!-- Subscription form -->
              <div class="footer-section__form">
                <form @submit.prevent class="subscribe-form">
                  <input
                    type="email"
                    v-model="email"
                    :placeholder="`E &minus; mail`"
                    class="subscribe-form__input"
                  />
                  <button
                    type="submit"
                    class="ui-button subscribe-form__submit"
                    :disabled="!email"
                  />
                </form>
              </div>

              <!-- Social icons -->
              <div
                class="footer-section__list footer-section__list--extended footer-section__list--horizontal"
              >
                <a
                  href="https://www.instagram.com/"
                  class="footer-section__list-item"
                >
                  <i
                    class="footer-section__list-item-icon footer-section__list-item-icon--instagram"
                  />
                </a>

                <a href="https://vk.com/" class="footer-section__list-item">
                  <i
                    class="footer-section__list-item-icon footer-section__list-item-icon--vk"
                  />
                </a>

                <a
                  href="https://ru-ru.facebook.com/"
                  class="footer-section__list-item"
                >
                  <i
                    class="footer-section__list-item-icon footer-section__list-item-icon--facebook"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="app__footer-copyright">Copyright &copy; 2022 SCID</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      email: null,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";

.app {
  background-color: #f5f5f5;
  font-family: $font-base;

  &,
  &__container {
    min-height: 100vh;
    overflow: hidden;
  }

  &__container {
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    margin: 0 auto;
    background-color: #fff;
  }

  &__heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    flex: 0 0 auto;
    background-color: #fff;
    box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.07);

    @media (min-width: $breakpoint-sm) {
      padding: 24px 80px;
    }

    @media (min-width: $breakpoint-lg) {
      flex-direction: row;
    }

    &-nav {
      padding: 24px 0;

      @media (min-width: $breakpoint-lg) {
        margin: 0 48px 0 auto;
      }

      .heading-nav {
        display: flex;
        gap: 24px;

        @media (min-width: $breakpoint-sm) {
          gap: 48px;
        }

        &__item {
          &-link {
            display: inline-flex;
            align-items: center;
            flex-wrap: nowrap;
            font-size: 12px;
            font-weight: 400;
            line-height: 22px;
            text-transform: uppercase;
            text-decoration: none;
            transition: all 0.25s ease-in-out;

            @media (min-width: $breakpoint-sm) {
              font-size: 16px;
            }

            &,
            &:visited {
              color: $color-black-main;
            }

            &:hover {
              color: $color-primary;
            }
          }

          &-icon {
            display: none;

            @media (min-width: $breakpoint-sm) {
              display: block;
              margin-right: 7px;
            }
          }
        }
      }
    }
  }

  &__main {
    flex: 1 0 auto;
    padding: 24px 0;
  }

  &__footer {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-color: $color-primary;
    color: white;

    @media (min-width: $breakpoint-lg) {
      padding: 60px 80px 26px;
    }

    &-tile {
      display: flex;
      flex-wrap: wrap;
      gap: 60px;
      margin-bottom: 80px;

      @media (min-width: $breakpoint-md) {
        flex-wrap: nowrap;
      }

      @media (min-width: $breakpoint-xl) {
        align-items: center;
      }

      @media (min-width: $breakpoint-xxl) {
        gap: 89px;
      }

      &-logo {
        flex: 0 0 108px;

        .footer-logo {
          width: 100%;
          max-width: 108px;
          height: 154px;
          border-radius: 16px;
          background-color: #009b63;
        }
      }

      &-links {
        display: flex;
        flex-wrap: wrap;
        gap: 60px;

        @media (min-width: $breakpoint-xl) {
          flex-wrap: nowrap;
        }

        @media (min-width: $breakpoint-xxl) {
          gap: 115px;
        }

        .footer-section {
          flex-grow: 1;
          flex-shrink: 0;

          @media (min-width: $breakpoint-sm) {
            flex-basis: calc((100% - 40px) / 2);
          }

          @media (min-width: $breakpoint-sm) {
            flex-basis: calc((100% - 60px) / 2);
          }

          @media (min-width: $breakpoint-xl) {
            flex-basis: calc((100% - 4 * 115px) / 4);
          }

          &__title {
            font-size: 20px;
            line-height: 30px;
            font-weight: 600;
            margin-bottom: 24px;
          }

          &__list {
            display: flex;
            flex-direction: column;
            gap: 14px;

            &-item {
              font-size: 16px;
              line-height: 21px;
              text-decoration: none;

              &,
              &:hover,
              &:visited {
                color: currentColor;
              }
            }

            &--extended {
              gap: 18px;

              .footer-section__list-item {
                display: flex;
                align-items: center;
                font-size: 14px;
                line-height: 19px;
                white-space: nowrap;

                &-icon {
                  display: inline-block;
                  width: 32px;
                  height: 32px;
                  border-radius: 50%;
                  margin-right: 8px;
                  background-color: rgba(255, 255, 255, 0.1);
                  background-position: 50%;
                  background-repeat: no-repeat;

                  &--whatsapp {
                    background-image: url("./assets/icons/messengers/icon-messenger-whatsapp.svg");
                  }

                  &--sms {
                    background-image: url("./assets/icons/messengers/icon-messenger-sms.svg");
                  }

                  &--telegram {
                    background-image: url("./assets/icons/messengers/icon-messenger-telegram.svg");
                  }

                  &--instagram {
                    background-image: url("./assets/icons/socials/icon-social-inst.svg");
                  }

                  &--vk {
                    background-image: url("./assets/icons/socials/icon-social-vk.svg");
                  }

                  &--facebook {
                    background-image: url("./assets/icons/socials/icon-social-fb.svg");
                  }
                }
              }
            }

            &--horizontal {
              flex-direction: row;
              gap: 16px;

              .footer-section__list-item-icon {
                margin: 0;
              }
            }
          }

          &__form {
            .subscribe-form {
              position: relative;
              min-width: 100%;
              margin-bottom: 50px;

              &__input {
                width: 100%;
                min-width: 255px;
                background-color: rgba(255, 255, 255, 0.2);
                outline: transparent;
                border: 0;
                border-radius: 8px;
                padding: 9px 36px 7px 12px;
                font-size: 14px;
                line-height: 24px;

                &,
                &::placeholder {
                  color: currentColor;
                }
              }

              &__submit {
                position: absolute;
                top: 12px;
                right: 12px;
                display: inline-block;
                width: 17px;
                height: 17px;
                background-image: url("./assets/icons/icon-send.svg");
                background-repeat: no-repeat;
              }
            }
          }
        }
      }
    }

    &-copyright {
      align-self: center;
      font-family: $font-additional;
      font-size: 14px;
      line-height: 24px;
    }
  }
}
</style>
