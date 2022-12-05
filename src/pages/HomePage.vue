<template>
  <div class="main-grid">
    <div v-for="n of newsByJouralList">
      <NewsCardContainer :newsByJournal="n"></NewsCardContainer>
    </div>
  </div>
</template>

<script>
import NewsCardContainer from '../components/NewsCardContainer.vue';

export default {
  components: { NewsCardContainer },
  setup: () => {
    const newsByJouralList = [
      {
        title: 'Brasil de Fato',
        color: '#e32626',
        url: 'https://brasildefato.com.br/ultimas-noticias',
        containerSelector: '.news-item',
        titleSelector: '.title',
        descriptionSelector: '.description'
      },
      {
        title: 'Midia ninja',
        color: '#ffffff',
        url: 'https://midianinja.org/noticias/',
        containerSelector: '.news',
        titleSelector: '.entry-title',
        descriptionSelector: '.post-content p'
      },
      {
        title: 'Twitter trendings',
        color: '#1DA1F2',
        url: 'https://trends24.in/brazil',
        containerSelector: '.trend-card:first-child > .trend-card__list > li',
        titleSelector: 'a',
        descriptionSelector: 'span'
      },

    ];

    return { newsByJouralList }
  }
}
</script>

<style>
.main-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  overflow: hidden;
  width: 100vw;
  height: 100%;
  max-height: 100vh;
  padding: 20px;
}

.main-grid>div {
  height: 100%;
  flex: 1;
}
</style>