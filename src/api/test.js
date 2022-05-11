import request from "@/utils/request";

export function getH5Person(data){
    return request({
        url:'/api/app/geth5rescueperson',
        method:'post',
        data
    })
}
