import PropTypes from 'prop-types'

function TaskItem({ task }) {
    return (
        <div className="tasks-item">
            <h2>{task.name}</h2>
            <span>{task.status}</span>
        </div>
    )
}

TaskItem.propTypes = {
    task: PropTypes.object.isRequired
}

export default TaskItem