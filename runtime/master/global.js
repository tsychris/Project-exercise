import { Page } from './page'
import { Component } from './component.js'



export const global = {
    modules: {},
    Page,
    getApp,
    Component,
    native: {
        readFileSync(path) {
            var request = new XMLHttpRequest();//模块加载函数
            request.open('GET', 'http://localhost:5000/' + path, false);
            request.send(null);
            if (request.status === 200) {
                return request.responseText
            }
        },
        log(msg){
            
        }
    }
}