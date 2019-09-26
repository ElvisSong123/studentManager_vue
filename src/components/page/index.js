import PageVue from './page';
import Vue from 'vue'
import Page from '@/tools/page.js';
var newPage = Vue.extend(PageVue);
export default function(dom) {
    var app = new newPage({
        el: document.createElement('div'),
        data() {
            return {

            }
        }
    })
    app.$el.classList.add('container')
    dom.appendChild(app.$el)
    new Page({
        allInfoNum: 1000,
        tabNum: 7,
        container: app.$el,
        nowPage: 2
    })
}