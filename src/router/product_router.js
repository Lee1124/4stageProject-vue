import product from '@/components/product/productMange'
import shopCar from '@/components/shop_car/shopCar'
import order from '@/components/order/order'

export default [
   {
    path: '/product',
    name: 'product',
    component: product
  }, {
    path: '/shopCar',
    name: 'shopCar',
    component: shopCar
  },{
    path: '/order',
    name: 'order',
    component: order
  }
]
