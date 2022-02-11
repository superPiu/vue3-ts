import {Todo} from'../type/Todo'
const saveTodos = (todos:Todo[]) => {
    localStorage.setItem('todos_key',JSON.stringify(todos))
}
const readTodos = ():Todo[] => {
    return JSON.parse( localStorage.getItem('todos_key')  || '[]')
}
export {saveTodos,readTodos}