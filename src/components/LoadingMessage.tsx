const LoadingMessage = () => {
    return (
        <main className="flex min-h-screen justify-center bg-zinc-900 px-4 py-10">
            <div className="flex flex-col items-center gap-4" role="status">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-700 border-t-indigo-500" />

                <p className="text-sm font-medium text-zinc-400">Loading...</p>
            </div>
        </main>
    );
};
export default LoadingMessage;
