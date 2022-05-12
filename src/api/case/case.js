import request from "@/utils/request";

export function getCaseList(query){
    return request({
        url:'/rescue/case/list',
        method: 'get',
        params: query
    })
}
