import TaskItem from "./TaskItem"
import PropTypes from 'prop-types'

function DayTaskItem({ dayFormat, tasks }) {
    return (
        <div className="tasks-day-item">
            <div className="tasks-day">{dayFormat}</div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}><TaskItem task={task} /></li>
                ))}
            </ul>
        </div>
    )
}

DayTaskItem.propTypes = {
    dayFormat: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired
}

export default DayTaskItem