<template>
  <div class="skeleton-loading-wrapper text-center">
    <h1 class="text-center">
      {{ title }}
      <v-icon disabled size="x-small" class="mx-3" color="darken-2">
        mdi-reload
      </v-icon>
    </h1>
    <NewsCardItemSkeleton></NewsCardItemSkeleton>
    <NewsCardItemSkeleton></NewsCardItemSkeleton>
    <NewsCardItemSkeleton></NewsCardItemSkeleton>
    <NewsCardItemSkeleton></NewsCardItemSkeleton>
    <NewsCardItemSkeleton></NewsCardItemSkeleton>

  </div>
</template>

<script setup>
import NewsCardItemSkeleton from './NewsCardItemSkeleton.vue';

const props = defineProps(['title']);
</script>

  
<style>
.skeleton-loading-wrapper {
  height: calc(100% - 50px);
  width: 100%;
  display: grid;
  gap: 15px;
}

.skeleton-loading {
  height: 100%;
  background: rgba(130, 130, 130, 0.2);
  width: 100%;
}


@keyframes wave {
  0% {
    background-position: 0px 0;
  }

  50% {
    background-position: 250px 0;
  }

  100% {
    background-position: 0px 0;
  }
}
</style>
  
  