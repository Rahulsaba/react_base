export default function ButtonLoader() {
    return (
        <div className="flex_main">
            <svg
                className="button_loader"
                viewBox="0 0 40 40"
                height="20"
                width="20"
            >
                <circle
                    className="button_loader_1"
                    cx="20"
                    cy="20"
                    r="17.5"
                    pathLength="100"
                    strokeWidth="5px"
                    fill="none"
                />
                <circle
                    className="button_loader_2"
                    cx="20"
                    cy="20"
                    r="17.5"
                    pathLength="100"
                    strokeWidth="5px"
                    fill="none"
                />
            </svg>

        </div>
    )
}