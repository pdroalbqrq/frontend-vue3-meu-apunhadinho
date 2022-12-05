<template>
    <v-card class="grid-card pa-3">
        <v-card-title class="pa-0">
        </v-card-title>
        <v-card-subtitle class="mt-4"></v-card-subtitle>
    </v-card>
</template>
  
<style scoped>
.v-card {
    height: 150px;
    background: rgba(130, 130, 130, 0.2);
    background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(71, 71, 71, 0.2)), color-stop(32%, rgba(92, 92, 92, 0.3)), color-stop(64%, rgba(71, 71, 71, 0.2)));
    background: linear-gradient(to right, rgba(71, 71, 71, 0.2) 0%, rgba(92, 92, 92, 0.3) 32%, rgba(71, 71, 71, 0.2) 64%);
    animation: wave 2s infinite ease-out;
    background-position: 0px 0;
    width: 100%;
    display: grid;
    border-radius: 5px;
    place-items: center;
}

.v-card:hover {
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.891)
}

.v-card>.v-card-title,
.v-card>.v-card-subtitle {
    white-space: normal;
}

.v-card:hover>.v-card-subtitle {
    opacity: 1;
}

.v-card-title a {
    text-decoration: none;
    line-height: 1.48;
}
</style>