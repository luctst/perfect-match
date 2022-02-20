<template>
  <div id="app">
    <section v-if="showLoader" class="loader">
      <h1 class="focus-in-expand">Alexandra Sanchez</h1>
    </section>
    <section v-else class="content--wrapper">
      <section class="content fade-in">
        <p>{{ slideContent }}</p>
        <svg
          @click="goToContact"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 330 330"
          style="enable-background: new 0 0 330 330"
          xml:space="preserve"
          fill="#eee"
        >
          <path
            id="XMLID_24_"
            d="M216.358,271.76c-2.322-5.605-7.792-9.26-13.858-9.26H180V15c0-8.284-6.716-15-15-15  c-8.284,0-15,6.716-15,15v247.5h-22.5c-6.067,0-11.537,3.655-13.858,9.26c-2.321,5.605-1.038,12.057,3.252,16.347l37.5,37.5  C157.322,328.536,161.161,330,165,330s7.678-1.464,10.607-4.394l37.5-37.5C217.396,283.816,218.68,277.365,216.358,271.76z"
          />
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </section>
      <section class="dark--layout"></section>
      <carousel
        ref="carousel"
        :loop="true"
        :autoplay="true"
        :perPage="1"
        :autoplayTimeout="3000"
        :autoplayHoverPause="false"
        :paginationEnabled="false"
      >
        <slide v-for="(data, key) in 8" :key="key">
          <img :src="require(`./assets/${data}.jpg`)" />
        </slide>
      </carousel>
      <section class="contact container">
        <header>
          <p v-html="$t('footerHeader')"></p>
          <h1 v-html="$t('footerContent')"></h1>
        </header>
        <main>
          <section class="main--title">
            <h1
            v-html="$t('footerContent')"
            :class="[$i18n.locale === 'fr' && 'h1--french']"></h1>
          </section>
          <section class="main--contact">
            <div class="main--contact--wrapper">
              <div>
                <p>EMAIL</p>
                <a href="mailto:theperfectmath.contact@gmail.com"
                  >theperfectmatch.contact@gmail.com</a
                >
              </div>
              <div>
                <p>{{ $t('contactPhone') }}</p>
                <a href="tel:0651791508">06 51 79 15 08</a>
              </div>
              <button data-tf-slider="FvhRquyK" data-tf-width="550" data-tf-iframe-props="title=Wedding RSVP (copy)" data-tf-medium="snippet" style="all:unset;font-family:Helvetica,Arial,sans-serif;display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#877964;color:#FFFFFF;font-size:17px;border-radius:7px;padding:0 28px;font-weight:bold;height:42.5px;cursor:pointer;line-height:42.5px;text-align:center;margin:0;text-decoration:none;">{{ $t('btnForm') }}</button><script src="//embed.typeform.com/next/embed.js" type="application/javascript"></script>
            </div>
            <script src="//embed.typeform.com/next/embed.js" type="application/javascript"></script>
          </section>
        </main>
      </section>
    </section>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      slideContent: this.$t('carouselTitle'),
      showLoader: true,
    };
  },
  mounted() {
    document.querySelector('.focus-in-expand').addEventListener('animationend', () => {
      this.showLoader = false;
    });
    document.querySelector('body').style = 'margin: 0;padding: 0;';
    window.addEventListener('scroll', () => {
      if (window.scrollY >= document.querySelector('.contact').clientHeight) {
        if (document.querySelector('button').classList.contains('shake-horizontal')) return false;
        document.querySelector('button').classList.add('shake-horizontal');
        return true;
      }

      if (document.querySelector('button').classList.contains('shake-horizontal')) {
        document.querySelector('button').classList.remove('shake-horizontal');
        return true;
      }
      return true;
    });
  },
  methods: {
    goToContact() {
      window.scrollBy({
        top: this.$refs.carousel.$el.offsetHeight,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  position: relative;

  .container {
    box-sizing: border-box;
    padding: 0 30px;
    margin: 0 auto;
  }

  .loader {
    @keyframes focus-in-expand{0%{letter-spacing:-.5em;filter:blur(12px);opacity:0}100%{filter:blur(0);opacity:1}}

    .focus-in-expand{animation:focus-in-expand 3s cubic-bezier(.25,.46,.45,.94) both}

    align-items: center;
    display: flex;
    justify-content: center;
    height: 100vh;
    background: #f8f7f4;

    h1 {
      color: #877964;
      font-family: "Playfair Display", serif;

      @media (max-width: 576px) {
        font-size: 2em;
      }
      @media (min-width: 577px) {
        font-size: 2em;
      }

      @media (min-width: 700px) {
        font-size: 3em;
      }
    }
  }

  .content--wrapper {
    @keyframes fade-in{0%{opacity:0}100%{opacity:1}}
    .fade-in{animation:fade-in 4s cubic-bezier(.39,.575,.565,1.000) both}

      .content {
        align-items: center;
        display: flex;
        flex-direction: column;
        position: absolute;
        height: 100vh;
        width: 100vw;
        z-index: 11;

        p {
          font-family: "Playfair Display", serif;
          color: #fff;
          margin: 0;
          padding: 0;
          opacity: 0.8;
          margin: auto 0;
          text-align: center;

          @media (max-width: 576px) {
            font-size: 2em;
          }
          @media (min-width: 577px) {
            font-size: 2em;
          }
          @media (min-width: 700px) {
            font-size: 3em;
          }
        }

        svg {
          height: 30px;
          width: 30px;
          margin-bottom: 8px;
          animation-name: bounce-2;
          animation-timing-function: ease;
          animation-duration: 2s;
          animation-iteration-count: infinite;

          &:hover {
            cursor: pointer;
          }
        }

        @keyframes bounce-2 {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(0);
          }
        }
      }

      .dark--layout {
        background-color: #141313;
        opacity: 0.3;
        position: absolute;
        top: 0;
        height: 100vh;
        width: 100%;
        z-index: 10;
      }

      img {
        height: 100vh;
        width: 100%;
        max-height: 100%;
        max-width: 100%;
        object-fit: cover;
      }

      .contact {
        background-color: #f8f7f4;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media (max-width: 576px) {
          height: 87vh;
        }

        @media (min-width: 577px) {
          height: 87vh;
        }

        @media (min-width: 700px) {
          height: 100vh;
        }

        header {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          p {
            font-family: "Playfair Display", serif;
            text-align: center;
            margin: 0;
            font-weight: 700;
            color: #877964;
            text-transform: uppercase;
            letter-spacing: 0.01em;

            span {
              display: block;
              font-size: .7em;
            }
          }

          h1 {
            margin: 0;
            color: #877964;
            font-family: "Playfair Display", serif;
            font-weight: 300;
          }

          @media screen and (max-width: 576px) {
            padding-top: 16px;

            p {
              font-size: 1.6rem;
            }

            h1 {
              display: block;
              font-size: 4.6rem;
              margin-top: 16px;
              flex: 0 0 100%;
            }
          }

          @media screen and (min-width: 577px) {
            padding-top: 16px;

            p {
              font-size: 1.6rem;
            }

            div {
              margin: 0 auto;
            }

            h1 {
              flex: 0 0 100%;
              font-size: 4.6rem;
              margin-top: 16px;
            }
          }

          @media screen and (min-width: 700px) {
            height: 100vh;

            h1 {
              font-size: 5.6rem;
            }
          }

          @media screen and (min-width: 800px) {
            h1 {
              display: none;
            }
          }
        }

        main {
          display: flex;

          .main--contact {
            @keyframes shake-horizontal{0%,100%{transform:translateX(0)}10%,30%,50%,70%{transform:translateX(-10px)}20%,40%,60%{transform:translateX(10px)}80%{transform:translateX(8px)}90%{transform:translateX(-8px)}}

            .shake-horizontal{
              animation:shake-horizontal .8s cubic-bezier(.455,.03,.515,.955) both!important;
            }

            display: flex;
            justify-content: center;
            font-family: "Playfair Display", serif;
            align-items: flex-end;
            width: 100%;

            &--wrapper {
              margin-top: 32px;
              display: flex;
              flex-direction: column;

              // button {
              //   width: 50%!important;
              // }
            }

            div {
              margin-bottom: 32px;

              p {
                color: #877964;
                font-weight: 700;
                margin-bottom: 0.9rem;
                margin: 0;
                text-transform: uppercase;
              }

              a {
                text-decoration: none;
                color: #83745d;
              }
            }
          }

          .main--title {
            color: #877964;

            .h1--french {
              font-size: 9.5rem;
            }

            button {
              height: 4.58333vw;
              width: 4.58333vw;
            }
          }

          @media screen and (max-width: 576px) {
            .main--title {
              h1 {
                display: none;
              }
            }
            .main--contact {
              text-align: center;

              div {
                p {
                  font-size: 14px;
                  // margin-bottom: 8px;
                }
                a {
                  font-size: 14px;
                }
              }

              button {
                margin: 0 auto!important;
              }
            }
          }

          @media screen and (min-width: 577px) {
            .main--title {
              h1 {
                display: none;
              }
            }

            .main--contact {
              text-align: center;

              div {
                p {
                  font-size: 14px;
                  // margin-bottom: 8px;
                }
                a {
                  font-size: 14px;
                }
              }

              button {
                margin: 0 auto!important;
              }
            }
          }

          @media screen and (min-width: 800px) {
            display: flex;

            .main--title {
              h1 {
                color: #877964;
                display: block;
                font-family: "Playfair Display", serif;
                font-size: 9.5rem;
                margin: 0;
                letter-spacing: -0.03em;
              }
            }

            .main--contact {
              text-align: left;
              margin-top: 80px;

              button {
                margin: 0!important;
              }
            }
          }

          @media screen and (min-width: 1000px) {
            .main--title {
              h1 {
                font-size: 13.6rem;
              }
            }

            .main--contact {
              margin-top: 80px;
            }
          }
        }
      }
    }
  }
</style>
