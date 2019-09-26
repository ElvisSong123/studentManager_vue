import axios from 'axios';
import { obj } from './index';
var appkey = {
    appkey: obj.appkey

}
var Axios = axios.create({
    method: 'get',
    baseURL: obj.baseURL,
    params: {

        appkey: obj.appkey
    }

})
var ajaxObj = {
    getStu: function(page, size) {
        return Axios({
            url: obj.findByPage,
            params: {
                page,
                size
            }

        })
    },
    getAllStu: function() {
        return Axios({
            url: obj.getAllStu
        })
    },
    // getStu: function() {
    //     return Axios.get(obj.findByPage, {
    //         params: {
    //             page,
    //             size
    //         }
    //     })
    // }
    addStu: function(stuObj) {
        return Axios({
            url: obj.addStu,
            params: {
                sNo: stuObj.sNo,
                name: stuObj.name,
                birth: stuObj.birth,
                email: stuObj.email,
                sex: stuObj.sex,
                address: stuObj.address,
                phone: stuObj.phone
            }

        })
    },
    delStu: function(sNo) {
        return Axios({
            url: obj.delStu,
            params: {
                sNo
            }

        })
    },
    searchStu: function(stuObj) {
        return Axios({
            url: obj.searchStu,
            params: {
                page: stuObj.page,
                sex: stuObj.sex,
                search: stuObj.search,
                size: stuObj.size
            }

        })
    },
    updateStu: function(stuObj) {
        return Axios({
            url: obj.updateStu,
            params: {
                sNo: stuObj.sNo,
                name: stuObj.name,
                birth: stuObj.birth,
                email: stuObj.email,
                sex: stuObj.sex,
                address: stuObj.address,
                phone: stuObj.phone
            }

        })
    },
}
export { ajaxObj }