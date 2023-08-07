<template>
  <div id="app" ref="appEl"></div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import App from "./App";

const appEl = ref()
onMounted(()=>{
  App.getInstance().init(appEl)
})
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
