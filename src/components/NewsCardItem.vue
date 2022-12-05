<template>
  <v-card :style="style" class="grid-card pa-3">
    <v-card-title class="pa-0">
      <a :href="newsElement.link" target="_blank">
        {{ newsElement.title }}
      </a>
    </v-card-title>
    <v-card-subtitle v-bind="props" class="mt-4">{{ description }}</v-card-subtitle>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['newsElement', 'my-color']);

const description = ref(null);
description.value = !!props.newsElement.description ? props.newsElement.description : 'Não foi possível recuperar a informação'
const style = ref({ '--color': props.myColor });

</script>

<style scoped>
.v-card:hover {
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.891)
}

.v-card>.v-card-title {
  white-space: normal;
}

/* .v-card-title>a {
  color: var(--color) !important;
}

.v-card-title>a:visited {
  color: rgba(255, 255, 255, 0.88);
} */

.v-card>.v-card-subtitle {
  padding: 0px;
  transition: height 0.2s ease-in-out;
}

.v-card:hover>.v-card-subtitle {
  white-space: normal;
  opacity: 1;
}

.v-card-title a {
  text-decoration: none;
  line-height: 1.48;
}
</style>