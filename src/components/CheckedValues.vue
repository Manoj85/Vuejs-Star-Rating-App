<template>
  <div id="checkboxValues">
    <h3> Checkbox Values </h3>

    <span v-for="option in options">
      <input type="checkbox" :id="option.value" :value="option.value" v-model="checkedNames">
      <label for="option.value"> {{option.value}}</label>
    </span>

    <br>
    <span>Checked names: {{ checkedNames }}</span>
  </div>
</template>

<script>
  export default {
    name: "checked-values",
    data() {
      return {
        checkedNames: [],
        options: [
          {value: 'John'},
          {value: 'Paul'},
          {value: 'George'},
          {value: 'Ringo'}
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  body {
    font-family: 'Bitter', serif;
  }

  #checkboxValues {
    text-align: center;
    padding-bottom: 70px;
    max-width: 360px;
    font-size: 16px;
    margin: 0 auto;
    display: table;
    line-height: 2em;
  }

  label {
    padding-right: 10px;
  }

</style>
