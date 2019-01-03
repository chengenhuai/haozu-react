import $http from '../uilts/http.js'

export function getCitylist () {
    return $http.get('/getCity')
}

export function getSearchlist (InputValue) {
    return $http.get(`/bj/suggestionV2/?keyword=${InputValue}&from=house`)
}

export function getHoustlist (index,page) {
    return $http.get(`/bj/${index}/?page=${page}&data_type=json`)
}

export function getlistBid (index) {
    return $http.get(`/bj/house-list/?bid=&keyword=${index}&page=1&data_type=json`)
}

export function getAreaList () {
    return $http.get('/getArea')
}

export function getLikeList (id,index) {
    return $http.get(`/bj/fxxiezilou/?house_type=${id}&page=${index}&isAjax=1`)
}

export function getMessageList (id,index) {
    return $http.get(`/bj/${id}/?ajax=1&page=${index}`)
}