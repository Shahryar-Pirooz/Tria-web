export default function Toast({ style }) {
    console.log(style)
    return (
        <div style={style} className="toast-area">
            <div className="toast-bg">
                <p className="text-lg">copied to clipboard!</p>
            </div>
        </div>
    )
}
