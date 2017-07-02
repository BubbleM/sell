<template>
  <div id="app">
    <h1>hah</h1>
      <v-header></v-header>
      <div class="tab">
        I am tab!
      </div>
      <div class="content">
        I am content!
      </div>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  export default {
    name: 'app',
    components: {
      'v-header': header
    }
  };
</script>

<style>

</style>
