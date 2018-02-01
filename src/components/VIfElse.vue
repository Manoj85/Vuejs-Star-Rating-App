<template>
  <div id="vifelse">
    <h3>Do you like tacos?</h3>
    <input type="radio" id="yes" value="yes" v-model="tacos">
    <label for="no"> yes</label>
    <br>
    <input type="radio" id="no" value="no" v-model="tacos">
    <label for="no"> no</label>

    <br>
    <div v-if="tacos">
      <p v-if="tacos === 'yes'" class="thumbs">👍</p>
      <p v-else>you're a monster</p>
    </div>
  </div>
</template>

<script>
    export default {
      name: "v-if-else",
      data() {
        return {
          tacos: ''
        }
      }
    }
</script>

<style scoped lang="scss">

  body {
    font-family: 'Bitter', serif;
  }

  #vifelse {
    text-align: center;
    padding-bottom: 40px;
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
    background: orangered;
    color: white;
    padding: 0.5em 1em;
    border-radius: 3px;
  }

  .thumbs {
    font-size: 40px;
    margin-top: 20px;
  }



</style>
