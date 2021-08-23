import Vue from 'vue'
import { format } from 'date-fns'

function dateFormat (date) {
  return format(new Date(date), 'dd MMMM yyyy')
}

Vue.filter('dateFormat', dateFormat)
