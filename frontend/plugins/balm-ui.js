import Vue    from 'vue'
import BalmUI     from 'balm-ui'

const $theme = {
  primary   : '#6E7B80',
  secondary : '#EB6435',
  background: '#FFFFFF',
}

if (process.client) {
  Vue.use(BalmUI, {
    $theme: $theme,
  })
}
