<template>
  <div class="px-2 md:px-10 pt-12 pb-4">
    <div
      class="grid grid-rows-flow grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 md:gap-4 xl:gap-12"
    >
      <calculator class="xl:col-span-2 pt-4 md:pt-0" :name="'A'"></calculator>
      <calculator class="xl:col-span-2 pt-4 md:pt-0" :name="'B'"></calculator>
      <div class="bg-red-200 xl:col-span-3 pt-4 md:pt-0">c</div>
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
</style>
