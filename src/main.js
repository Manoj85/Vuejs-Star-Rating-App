import Vue from 'vue'
import Rating from './components/Rating'
import BookBasic from './components/BookBasic'
import BookContentTyper from './components/BookContentTyper'

new Vue({
  el: '#app',
  template: `<div>
      <Rating :grade="3"/>
      <hr/>
      <BookBasic />
      <hr/>
      <BookContentTyper />
  </div>`,
  components: {
    Rating,
    BookBasic,
    BookContentTyper
  }
})
