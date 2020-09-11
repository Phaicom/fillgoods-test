<template>
  <div>
    <navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
@import '@/assets/css/style.base.css';
</style>
