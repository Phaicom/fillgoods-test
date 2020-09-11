<template>
  <div>
    <search />
    <div class="result bg-white p-10 mt-2">
      <div class="wrapper">
        <div
          class="mb-2"
          v-for="(result, i) in getSearchResults()"
          :key="i + 1"
        >
          <div class="grid grid-rows-1 xl:grid-cols-2 gap-2 text-xl">
            <p>Calculator {{ result.name }}</p>
            <p class="date">{{ formatDate(result.date) }}</p>
          </div>
          <monitor :expr="result.expr" :result="result.result" />
        </div>
      </div>

      <button class="button text-3xl px-3" @click="clear()">Clear</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import moment from 'moment'
import axios from "axios";
import Search from '@/components/result/Search'
import Monitor from '@/components/calculator/Monitor'

export default {
  components: {
    Search, Monitor
  },
  data() {
    return {
      results: [],
    }
  }, methods: {
    ...mapGetters([
      'getSearchResults'
    ]),
    ...mapMutations({ clear: 'clear' }),
    formatDate(date) {
      return moment(date).format('DD/MM/YYYY - h:mm:ss')
    },
  }
}
</script>

<style scoped>
.result {
  position: relative;
  border-radius: 2rem;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.25);
  height: 600px;
  overflow: hidden;

  .wrapper {
    overflow-y: scroll;
    height: 100%;

    .date {
      color: #9bc2e3;
    }
  }

  .button {
    background-color: #faa7a7;
    color: white;
    position: absolute;
    bottom: 20px;
    right: 20px;
    border-radius: 1rem;
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.25);

    &:focus {
      outline: none;
    }

    &:active {
      box-shadow: none;
    }
  }
}
</style>