<template>
  <div>
    <div class="xl:flex xl:items-center mb-4 text-2xl">
      <div class="xl:w-2/12">
        <label class="block xl:text-left mb-1 xl:mb-0 pr-4"> Results </label>
      </div>
      <div class="xl:w-7/12">
        <div class="xl:pr-4 pt-2 xl:pt-0">
          <input
            class="input appearance-none w-full py-2 px-4 leading-tight placeholder-current"
            type="text"
            placeholder="Search by result, date"
            v-model="text"
          />
        </div>
      </div>
      <div class="xl:w-3/12 xl:inline-block relative pt-2 xl:pt-0">
        <select
          class="input appearance-none w-full py-2 px-4 leading-tight"
          style="text-align-last: center"
          type="text"
          v-model="filter"
        >
          <option>All</option>
          <option>A</option>
          <option>B</option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      text: '',
      filter: 'All',
    }
  },
  watch: {
    text(val) {
      this.$store.commit('updateSearch', {
        text: val,
        filter: this.filter,
      });
    },
    filter(val) {
      this.$store.commit('updateSearch', {
        text: this.text,
        filter: val,
      });
    }
  }
}
</script>

<style scoped>
.input {
  border-radius: 2rem;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.25);
  color: #969696;

  &:focus {
    outline: none;
  }
}
</style>