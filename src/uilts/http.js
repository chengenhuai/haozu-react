
let host = process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://m.haozu.com'

const $http = {
    post(url,params) {
        return new Promise((resolve,reject)=>{
            fetch(host+url,{
                headers:{
                    "Content-Type": "application/json; charset=utf-8",
                },
                method: 'POST',
                body: params
            }).then(res=>res.json()).then(res=>{
                resolve(res)
            })
        })
    },  
    get(url){
        return new Promise((resolve,reject)=>{
            fetch(host+url).then(res=>res.json()).then(res=>{
                resolve(res)
            })
        })
    },
    all(queryAll){
        return Promise.all(queryAll)
    }
}

module.exports = $http