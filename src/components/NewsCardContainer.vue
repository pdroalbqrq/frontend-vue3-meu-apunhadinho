<template>
  <div class="card-wrapper" v-if="!loading">
    <h1 class="text-center">{{ newsByJournal.title }}
      <v-icon @click="fetch" size="x-small" class="mx-3 reload-news" color="darken-2">
        mdi-reload
      </v-icon>
    </h1>
    <perfect-scrollbar>
      <div class="grid-wrapper-news pa-5">
        <NewsCardItem :my-color="newsByJournal.color" v-for="news in data" :newsElement="news"></NewsCardItem>
      </div>
    </perfect-scrollbar>
  </div>
  <NewsCardContainerSkeleton :title="newsByJournal.title" v-else></NewsCardContainerSkeleton>
</template>

<script setup>
import NewsCardItem from './NewsCardItem.vue';
import NewsCardContainerSkeleton from './NewsCardContainerSkeleton.vue';
import { useFetch } from '../hooks/useFetchNews';

const props = defineProps(['newsByJournal']);
const url = `http://localhost:8000/news?url=${props.newsByJournal.url}&containerSelector=${props.newsByJournal.containerSelector}&titleSelector=${props.newsByJournal.titleSelector}&descriptionSelector=${props.newsByJournal.descriptionSelector}`;
const { data, fetch, loading } = useFetch(url);

</script>

<style>
.card-wrapper {
  height: 100%;
}

.grid-wrapper-news {
  display: grid;
  gap: 15px;
  max-height: calc(100vh - 100px);
}

.grid-wrapper-news:has(.v-card) {
  padding: 200px;
}

.reload-news {
  cursor: pointer;
  transition: all ease-in-out 0.2s;
}

.reload-news:hover {
  transform: rotate(40deg);
}
</style>