import TaskDayItem from "./TaskDayItem"
import { scopeTasks } from '../../api'
import { useState, useEffect  } from 'react'

function Tasks() {

    let [taskList, setTaskList] = useState([])

    const queryScopeTasks = async () => {
        const { code, data } = await scopeTasks()
        console.log(code, data)
        if (!data || +code != 200) taskList = []
        const { dayTasks } = data
        setTaskList(dayTasks)
    }

    useEffect(() => {
        queryScopeTasks()
    }, [])


    return (
        <div className="content-tasks">
            <ul>
                {taskList.map((dayTask) => (
                    <li key={dayTask.dayTask}>
                        <TaskDayItem 
                            dayFormat={dayTask.dayFormat} 
                            taskList={dayTask.tasks} 
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tasks