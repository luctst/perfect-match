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
        fill="#fff"
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
    <section class="contact"></section>
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
      slideContent: 'The perfect match arrive bientôt',
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
      color: #fff;
      font-size: 2.5rem;
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
    height: 100vh;
  }
}
</style>
