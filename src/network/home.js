import {request} from "./request";

export function getMutiData() {
  return request({
    url:'/home/multidata'
  })
}
