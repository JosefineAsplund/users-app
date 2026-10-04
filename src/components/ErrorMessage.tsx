import { CircleAlert } from "lucide-react";

const ErrorMessage = () => {
    return (
        <main className="min-h-screen bg-zinc-900 px-4 py-10">
            <div
                role="alert"
                className="mx-auto flex max-w-xl items-start gap-4 rounded-xl border border-red-500/20 bg-zinc-800 p-6 shadow-lg"
            >
                <CircleAlert
                    size={24}
                    className="mt-0.5 shrink-0 text-red-400"
                    aria-hidden="true"
                />

                <div>
                    <h2 className="font-semibold text-white">
                        Something went wrong
                    </h2>

                    <p className="mt-1 text-sm leading-6 text-zinc-400">
                        We couldn't load the users. Please try again later.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default ErrorMessage;
