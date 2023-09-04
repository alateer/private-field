import { FaListCheck, FaMarker } from 'react-icons/fa6'

function Header() {
    return (
        <div className="todoist-header">
            <div className="todoist-header-nav">

                {/* LOGO */}
                <div className="todoist-icon">
                    <FaListCheck />
                    <span className="todoist-description">
                        待办清单
                    </span>
                </div>

                <div className="todoist-header-info">
                    <FaMarker />
                </div>
            </div>
        </div>
    )
}

export default Header