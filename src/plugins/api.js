import * as request from './request.js'
export function getMenuList(){
    return request.get('/menu/list')
}
export function getArticleList(menuId,current,size,status){
    return request.get('/article/list',{
        menuId,
        current,
        size,
        status
    })
}
export function getStudent(){
    return request.get('/cLevel/student/map')
}
export function getTeacher(){
    return request.get('/cLevel/teacher/list')
}