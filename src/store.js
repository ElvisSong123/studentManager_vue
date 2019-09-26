import Vue from 'vue'
import Vuex from 'vuex'
import { ajaxObj } from '@/ajax/axios';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        allStu: null,
        studentInfo: {},
        createFunc: '',
        editInfo: {},
        infoObj: {},
        page: 1,
        size: 2
    },
    mutations: {
        changeSize(state, num) {
            state.size = num;
            state.page = 1;
            console.log(state.size)
        },
        changePageNum(state, num) {
            state.page = num
        },
        changeAllStu(cont) {
            state.allStu = cont
        },
        getStu(state, res) {
            state.studentInfo = res.data.data.findByPage;
        },
        getAllStu(state, res) {

            state.allStu = res.data.data.length;


        }
    },
    actions: {
        getStu({ commit, state }) {
            ajaxObj.getStu(state.page, state.size).then((res) => {
                commit('getStu', res);

            })

        },
        getAllStu1({ commit, state }) { //当搜索关键词为空时，重新渲染分页插件函数。
            ajaxObj.getAllStu().then((res) => {
                commit('getAllStu', res);
                if (state.createFunc != '') {
                    state.createFunc(state, state.size)
                }
            })
        },
        getAllStu({ commit, state }, createPage) { //初始化分页插件函数
            ajaxObj.getAllStu().then((res) => {
                commit('getAllStu', res, createPage);
                state.createFunc = createPage;
                createPage(state, state.size)
            })
        },
        searchByWord({ commit, state }, searchObj) {
            ajaxObj.searchStu(searchObj).then((res) => {
                // commit('getAllStu', res, createPage);
                console.log(res)
                if (res.data.status == 'fail') {
                    return
                }
                var cont = res.data.data.cont;
                var stuInfo = res.data.data.searchList
                state.allStu = cont;
                state.studentInfo = stuInfo;
                state.createFunc(state, state.size)
            })
        }
    }
})