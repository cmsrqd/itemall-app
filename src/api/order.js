import $http from './request'

// 添加订单
export const saveOrder = (data, token) => $http({
  url: '/order',
  method: 'POST',
  headers: {
    common: {
      Authorization: token
    }
  },
  data
})

// 查询order数据
export const queryOrder = (params, token) => $http({
  url: '/order',
  method: 'get',
  headers: {
    common: {
      Authorization: token
    }
  },
  params
})