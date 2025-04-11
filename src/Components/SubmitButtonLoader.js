export const SubmitButtonLoader = () => {
    return (
        <span id="loadingDots" className="ml-2 h-6 flex items-center justify-items-center ">
            <span className="w-2 h-2 bg-white rounded-full mx-1 animate-submit animate-submit-1"></span>
            <span className="w-2 h-2 bg-white rounded-full mx-1 animate-submit animate-submit-2"></span>
            <span className="w-2 h-2 bg-white rounded-full mx-1 animate-submit animate-submit-3"></span>
        </span>
    )
}

