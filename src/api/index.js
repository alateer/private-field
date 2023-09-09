import http from "./http"

export const scopeTasks = (start, end) => {
    const params = {}
    if (start && end) Object.assign(params, {start, end})
    return http.get('/pf/todo/task/scopeTasks', {
        params: params
    })
}