'use client';
export default function DropDown() {
    return (
        <>
            <button
                className="relative py-2 px-5 text-base sm:text-lg font-semibold rounded-2xl border-2 border-neutral-200 hover:border-sky-500"
            >
                Users
            </button>
            <div className="absolute w-48">
                <div className="bg-lavender sm:text-lg backdrop-blur-lg rounded-xl border border-gray-700 divide-y divide-gray-700">
                    <div className="py-2 px-3">
                        link 1
                    </div>
                    <div className="py-2 px-3">
                        link 1
                    </div>
                    <div className="py-2 px-3">
                        link 1
                    </div>
                </div>
            </div>
        </>
    )
}