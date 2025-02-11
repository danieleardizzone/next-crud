'use client';
import Link from "next/link";
import DropDown from '@/app/components/DropDown';
import ThemeToggle from "@/app/components/ThemeToggle";

const users = ['/users', '/users/create']

export default function PageHeader() {

    return (
        <header className="px-3 mb-2">
            <div className="flex justify-between">
                <div className="sm:text-2xl text-xl">
                    MyBlog
                </div>
                {/* <div>
                    <Link href="/users" className="border rounded border-black p-2">users list</Link>
                    <Link href="/users/create" className="border rounded border-black p-2">create user</Link>
                </div> */}
                <div>
                    <DropDown />
                </div>
                <div>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );

}