<template>
  <div class="container">
    <div class="grid grid-rows-flow grid-cols-3 gap-4">
      <calculator class="row-span-1"></calculator>
      <div class="bg-red-200 row-span-1">c</div>
      <div class="bg-red-200 row-span-1">d</div>
    </div>
  </div>
</template>

<script>
import Calculator from '@/components/calculator/Calculator'
export default {
  components: {
    Calculator
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  /* justify-content: center;
  align-items: center;
  text-align: center; */
}
</style>
