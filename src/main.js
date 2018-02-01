import Vue from 'vue'
import Rating from './components/Rating'
import BookBasic from './components/BookBasic'
import BookContentTyper from './components/BookContentTyper'
import CheckedValues from './components/CheckedValues'

new Vue({
  el: '#app',
  template: `<div>
      <Rating :grade="3"/>
      <hr/>
      
      <BookBasic />
      <hr/>
      
      <BookContentTyper />
      <hr/>
      
      <CheckedValues />
      <hr/>
  </div>`,
  components: {
    Rating,
    BookBasic,
    BookContentTyper,
    CheckedValues
  }
})
