<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="ceshi">
    <div class="nei">nei</div>
  </div>
  <RouterView />
</template>

<style lang="less" scoped>
.ceshi{
  .nei{
    color: red;
  }
}
</style>
