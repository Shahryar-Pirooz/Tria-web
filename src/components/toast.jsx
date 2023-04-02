export default function Toast({ style }) {
    console.log(style)
    return (
        <div
            style={style}
            className="absolute bottom-0 px-10 py-3 transition-all duration-700"
        >
            <div className="rounded-xl bg-blue px-6 py-2 text-white">
                <p className="text-lg">copied to clipboard!</p>
            </div>
        </div>
    )
}
