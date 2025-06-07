
export default function ProgressBar(props) {
    return (
        <div>
            <h1>Progress Bar</h1>
            <div className="progress-bar-container" style={{
                width: "100%",
                backgroundColor: "#e0e0e0",
                borderRadius: "4px", 
                color: "#e0e0e0", 
                position: "relative"
            }}>-
            <div className="progress-bar-fill"
            style={{
                width: `${props.progress}%`,
                backgroundColor: "#FFC0CB",
                borderRadius: "4px", 
                color: "#FFC0CB", 
                position: "absolute",
                top: "0px"
            }}>-</div>
            </div>
            <p>{props.progress}% Complete</p>
        </div>
    )
}
