<template>
  <div class="lg:mt-4">
    <h1 class="block text-2xl">Calculator {{ name }}</h1>
    <div class="calculator bg-white p-10 mt-2">
      <monitor :expr="expr" :result="result" />
      <div class="grid grid-rows-2 grid-cols-4 gap-2 mt-2 text-3xl">
        <!-- row 1 -->
        <button class="button square row-span-1" @click="clear()">
          <p>C</p>
        </button>
        <button class="button square row-span-1" @click="add('*')">
          <p>x</p>
        </button>
        <button class="button square row-span-1" @click="add('-')">
          <p>-</p>
        </button>
        <button class="button row-span-2" @click="add('+')">
          <p>+</p>
        </button>
        <!-- row 2-->
        <button class="button square row-span-1" @click="add('7')">
          <p>7</p>
        </button>
        <button class="button square row-span-1" @click="add('8')">
          <p>8</p>
        </button>
        <button class="button square row-span-1" @click="add('9')">
          <p>9</p>
        </button>
        <!-- row 3 -->
        <button class="button square row-span-1" @click="add('4')">
          <p>4</p>
        </button>
        <button class="button square row-span-1" @click="add('5')">
          <p>5</p>
        </button>
        <button class="button square row-span-1" @click="add('6')">
          <p>6</p>
        </button>
        <button class="button square row-span-3" @click="calculate()">
          <p>=</p>
        </button>
        <!-- row 4 -->
        <button class="button square row-span-1" @click="add('1')">
          <p>1</p>
        </button>
        <button class="button square row-span-1" @click="add('2')">
          <p>2</p>
        </button>
        <button class="button square row-span-1" @click="add('3')">
          <p>3</p>
        </button>
        <!-- row 5 -->
        <button class="button col-span-2" @click="add('0')">
          <p>0</p>
        </button>
        <button class="button square row-span-1" @click="add('.')">
          <p>.</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Monitor from '@/components/calculator/Monitor'

export default {
  components: {
    Monitor
  },
  props: {
    name: { type: String, default: '' },
  },
  data() {
    return {
      expr: '',
      result: ''
    }
  }, methods: {
    async calculate() {
      let previous = this.expr.split('')[this.expr.length - 1];
      if (this.isOperator(previous) || this.expr === '')
        return;
      let res = await axios.post(`http://api.mathjs.org/v4/`, { expr: this.expr, precision: 10 })
      this.result = res.data.result
      this.$store.commit('add', {
        expr: this.expr,
        result: this.result,
        name: this.name,
        date: Date.now()
      });
    },
    add(opr) {
      let previous = this.expr.split('')[this.expr.length - 1];
      if (this.isOperator(opr) && this.isOperator(previous))
        return;
      this.expr += opr
    },
    clear() {
      this.result = '';
      this.expr = '';
    },
    isOperator(opr) {
      let count = 0;
      ['+', '-', '*'].forEach(operator => {
        if (operator === opr) {
          count++;
        }
      })
      if (count === 1)
        return true;
      return false;
    }
  }
}
</script>

<style scoped>
.calculator {
  border-radius: 2rem;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.25);

  .button {
    background-color: #a8d4fa;
    position: relative;
    border-radius: 1rem;
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.25);

    & > p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &:focus {
      outline: none;
    }

    &:active {
      box-shadow: none;
    }
  }

  .square {
    padding-top: 100%;
  }
}
</style>