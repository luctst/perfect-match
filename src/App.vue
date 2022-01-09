<template>
  <div id="app">
    <section class="content">
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
      :autoplay="true"
      :perPage="1"
      :autoplayTimeout="5000"
      :autoplayHoverPause="false"
      :paginationEnabled="false"
    >
      <slide v-for="(data, key) in 8" :key="key">
        <img :src="require(`./assets/${data}.jpg`)" />
      </slide>
    </carousel>
    <section class="contact container">
      <header>
        <p>Wedding planner in Paris<br/> and Bordeaux</p>
        <div>
          <img src="" alt="the Perfect Match logo">
        </div>
        <h1>Get in <br/>Touch</h1>
      </header>
      <main>
        <section class="main--title">
          <h1>Get in <br/>Touch</h1>
        </section>
        <section class="main--contact">
          <div>
            <p>EMAIL</p>
            <a href="mailto:theperfectmath.contact@gmail.com">theperfectmath.contact@gmail.com</a>
          </div>
          <div>
            <p>Perfect Match Office</p>
            <a href="tel:0651791508">0651791508</a>
          </div>
      <button data-tf-slider="IhgEUzrB" data-tf-width="550" data-tf-iframe-props="title=Registration Form" style="all:unset;font-family:Helvetica,Arial,sans-serif;display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#0445AF;color:#FFFFFF;font-size:20px;border-radius:25px;padding:0 33px;font-weight:bold;height:50px;cursor:pointer;line-height:50px;text-align:center;margin:0;text-decoration:none;">Launch me</button><script src="//embed.typeform.com/next/embed.js" type="application/javascript"></script>
        </section>
      </main>
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
      slideContent: 'The Perfect Match is coming soon',
    };
  },
  mounted() {
    document.querySelector('body').style = 'margin: 0;padding: 0;';
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

  .content {
    align-items: center;
    display: flex;
    flex-direction: column;
    position: absolute;
    height: inherit;
    width: 100vw;
    z-index: 11;

    p {
      font-family: 'Playfair Display', serif;
      color: #eee;
      font-size: 3rem;
      margin: 0;
      padding: 0;
      opacity: 0.8;
      margin: auto 0;
      text-align: center;
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
      0%   { transform: translateY(0); }
      50%  { transform: translateY(-30px); }
      100% { transform: translateY(0); }
    }
  }

  .dark--layout {
    background-color: #141313;
    opacity: 0.8;
    position: absolute;
    top: 0;
    height: inherit;
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
    background-color: #161616;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header {
      display: flex;
      flex-wrap: wrap;

      p {
        margin: 0;
        font-weight: 700;
        color: hsla(0,0%,100%,.3);
        text-transform: uppercase;
        letter-spacing: .01em;
      }

      div {
        img {
          color: #fff;
          max-height: 100%;
          height: auto;
          max-width: 100%;
          object-fit: contain;
        }
      }

      h1 {
        margin: 0;
        color: #fff;
        font-family: 'Playfair Display', serif;
        font-weight: 300;
      }

      @media screen and (max-width: 576px) {
        padding-top: 16px;
        justify-content: space-between;

        p {
          font-size: .6rem;
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
          font-size: .6rem;
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
        width: 100%;

        div {
          margin-bottom: 25px;

          p {
            color: hsla(0,0%,100%,.3);
            font-weight: 700;
            margin-bottom: .9rem;
            margin: 0;
            text-transform: uppercase;
          }

          a {
            font-weight: 700;
            text-decoration: none;
            text-transform: uppercase;
            color: #fff;
          }
        }
      }

      .main--title {
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
              margin-bottom: 8px;
            }
            a {
              font-size: 14px;
            }
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
              margin-bottom: 8px;
            }
            a {
              font-size: 14px;
            }
          }
        }
      }

      @media screen and (min-width: 800px) {
        display: flex;

        .main--title {
          h1 {
            color: #fff;
            display: block;
            font-family: 'Playfair Display', serif;
            font-size: 9.5rem;
            margin: 0;
            letter-spacing: -.03em;
          }
        }

        .main--contact {
          text-align: left;
          margin-top: 80px;
          margin-left: 32px;
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
          margin-left: 80px;
        }
      }
    }
  }
}
</style>
