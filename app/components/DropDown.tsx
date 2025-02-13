'use client';

import Link from "next/link";

export default function DropDown() {

    function toggleDropdown() {
        const dropDownMenu = document.querySelector('#dropDownMenu');
        dropDownMenu?.classList.toggle('hidden');
    }

    return (
        <>
            <button
                onClick={toggleDropdown}
                className="relative py-1 px-5 w-22 sm:w-28 text-md sm:text-lg font-bold rounded-2xl border-2 border-btn bg-btn"
            >
                <div className="flex items-center gap-2">
                    <span>Users</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>


                </div>
            </button>
            <div className="w-44 absolute top-[76px] hidden" id="dropDownMenu">
                <div className="sm:text-lg rounded-xl shadow-lg bg-card border border-card divide-y divide-card">
                    <div className="py-2 px-3">
                        <Link href="/users">List</Link>
                    </div>
                    <div className="py-2 px-3">
                        <Link href="/users/create">Create</Link>
                    </div>
                </div>
            </div>
        </>
    )
}