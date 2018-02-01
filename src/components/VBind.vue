<template>
  <div id="app-vbind">
    <h3>What is your favorite kind of taco?</h3>
    <textarea v-model="tacos"></textarea>

    <br>
    <button :class="[tacos ? activeClass : '']">Let us know!</button>
  </div>
</template>

<script>
    export default {
      name: "v-bind",
      data() {
        return {
          tacos: '',
          activeClass: 'active'
        }
      }
    }
</script>

<style scoped lang="scss">
  body {
    font-family: 'Bitter', serif;
  }

  #app-vbind {
    text-align: center;
    padding: 70px;
    max-width: 360px;
    font-size: 16px;
    margin: 0 auto;
    display: table;
    line-height: 2em;
  }

  label {
    padding-right: 10px;
  }

  button {
    border: none;
    color: white;
    padding: 0.5em 1em;
    border-radius: 3px;
  }

  button.active {
    background: orangered;
  }

</style>
