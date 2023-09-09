import TaskItem from "../TaskItem"
import PropType from 'prop-types'

// eslint-disable-next-line react/prop-types
function TaskDayItem({ dayFormat, taskList }) {
    return (
        <div className="tasks-day-item">
            <div className="tasks-day">{dayFormat}</div>
            <ul>
                {taskList.map((task) => (
                    <li key={task.id}><TaskItem task={task.task} /></li>
                ))}
            </ul>
        </div>
    )
}

TaskDayItem.propType = {
    dayFormat: PropType.string.isRequired,
    taskList: PropType.array.isRequired
}

export default TaskDayItem