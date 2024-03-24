import DayTaskItem from "./DayTaskItem"

function Tasks() {

    const dayTasks = [
        {
            dayFormat: '2023-01-01',
            tasks: [
                {
                    name: 'aaa',
                    status: 'do'
                }
            ]
        }
    ]

    return (
        <div className="content-tasks">
            <ul>
                {dayTasks.map((dayTask) => (
                    <li key={dayTask.dayFormat}>
                        <DayTaskItem 
                            dayFormat = {dayTask.dayFormat} 
                            tasks = {dayTask.tasks} 
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tasks