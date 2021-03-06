/*
 包含n个接口请求模块的函数
 函数返回值：promise对象
 */
//1.根据经纬度获取位置详情
import ajax from './ajax'

const BASE_URL = '/api'

//2.获取食品分类列表
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
//3.根据经纬度获取商铺列表
export const reqFoodCategorys = () => ajax(BASE_URL + '/index_category')
//4.根据经纬度和关键字搜索商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL+'/shops',{longitude, latitude})
//5.获取一次性验证码
export const reqCaptcha = () => ajax(BASE_URL+'/captcha','GET')
//6.用户名密码登录
export const reqPwdLogin = (name,pwd,captcha) => ajax('/api/login_pwd',
  {name,pwd,captcha},'POST')
//7.发送短信验证码
export const reqSendCode = (phone) => ajax('/api/sendcode',{phone})
//8.手机号验证码登录
export const reqSmsLogin = (phone,code) => ajax('/api/login_sms',
  {phone,code},'POST')
//9.根据会话获取用户信息
export const reqUser = () => ajax('/api/userinfo')
//10.用户登出
export const reqLogout = () =>ajax('/api/logout')
