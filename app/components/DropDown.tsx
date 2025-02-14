'use client';

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Dropdown() {

    const dropdownMenuRef = useRef<HTMLDivElement>(null);
    const dropdownBtnRef = useRef<HTMLButtonElement>(null);

    function dropdownBtn() {
        dropdownMenuRef.current?.classList.toggle('hidden');
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                !dropdownMenuRef.current?.contains(event.target as Node) && !dropdownBtnRef.current?.contains(event.target as Node)
            ) {
                dropdownMenuRef.current?.classList.add('hidden');
            }
        }
        document.addEventListener('click', handleClickOutside);
    }, []);

    return (
        <>
            <button
                ref={dropdownBtnRef}
                onClick={dropdownBtn}
                className="relative py-1 px-5 w-22 sm:w-28 text-md sm:text-lg font-bold rounded-2xl border-2 border-btn bg-btn"
            >
                <div className="flex items-center gap-2">
                    <span>Users</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>


                </div>
            </button>
            <div className="w-44 absolute top-[76px] hidden" id="dropdownMenu" ref={dropdownMenuRef}>
                <div className="sm:text-lg rounded-xl shadow-lg bg-card border border-card divide-y divide-card">
                    <div>
                        <Link href="/users" onClick={dropdownBtn}>
                            <div className="py-2 px-3">
                                List
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href="/users/create" onClick={dropdownBtn}>
                            <div className="py-2 px-3">
                                Create
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}