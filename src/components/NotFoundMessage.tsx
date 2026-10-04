import { ArrowLeft, TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";

type NotFoundMessageProps = {
    title: string;
    message: string;
    label: string;
};

const NotFoundMessage = ({ title, message, label }: NotFoundMessageProps) => {
    return (
        <main className="min-h-screen bg-zinc-900 px-4 py-10">
            <div className="mx-auto max-w-6xl">
                <div className="mx-auto max-w-xl justify-items-center rounded-xl border border-zinc-700 bg-zinc-800 p-8 shadow-lg">
                    <TriangleAlert
                        size={40}
                        className="mb-5 text-indigo-400"
                        aria-hidden="true"
                    />

                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
                        {label}
                    </p>

                    <h1 className="mt-2 text-3xl font-bold text-white">
                        {title}
                    </h1>

                    <p className="mt-3 text-zinc-400">{message}</p>

                    <Link
                        to="/"
                        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 font-medium text-white transition hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                    >
                        <ArrowLeft size={18} aria-hidden="true" />
                        Back to users
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default NotFoundMessage;
