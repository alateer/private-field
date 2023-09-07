import Tasks from "./Tasks"
import AddTask from "./AddTask"

function Content() {
    return (
        <div className="todoist-content">
            <div className="content-filter">
                Filter
            </div>

            <Tasks></Tasks>

            <AddTask></AddTask>
        </div>
    )
}

export default Content