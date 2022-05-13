import request from "@/utils/request";

export function getCaseList(query){
    return request({
        url:'/rescue/case/list',
        method: 'get',
        params: query
    })
}

export function listRescueType(query) {
    return request({
        url: '/rescue/rescueType/list',
        method: 'get',
        params: query
    })
}
