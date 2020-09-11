<template>
  <div>
    <p class="text-4xl">{{ result || 0 }}</p>
    <hr style="border-color: #cdcdcd" />
    <p class="text-2xl" v-html="exprFormat || 0"></p>
  </div>
</template>

<script>
export default {
  props: {
    expr: { type: String, default: '' },
    result: { type: String, default: '' },
  },
  data() {
    return {
    }
  }, computed: {
    exprFormat() {
      let newExpr = this.expr.split('*').join('x');
      return newExpr.replace(new RegExp('[x+-]', "g"), match => {
        return '<span style="color:#E526D0;"> ' + match + ' </span>';
      });
    }
  }
}
</script>