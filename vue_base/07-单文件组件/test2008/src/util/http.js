// import axios from 'axios'
// // 1
// function httpForDetail (id) {
//   return axios({
//     url: `/detail/gateway?filmId=${id}&k=4143510`,
//     headers: {
//       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16593314392095394284634113","bc":"110100"}',
//       'X-Host': 'mall.film-ticket.film.info'
//     }
//   })
// }
// function htppForList () {
//   return axios({
//     url: '/maizuo/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=2546257',
//     headers: {
//       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16593314392095394284634113","bc":"110100"}',
//       'X-Host': 'mall.film-ticket.film.list'
//     }
//   })
// }
// // es6 导出
// export default {
//   httpForDetail,
//   htppForList
// }

// 2.请求数据封装
import axios from 'axios'
const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 1000,
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16593314392095394284634113","bc":"110100"}'
  }
})
export default {
  http
}
