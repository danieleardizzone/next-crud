'use client';
import Link from "next/link";
import ThemeToggle from "@/app/components/ThemeToggle";
import Dropdown from "@/app/components/Dropdown";

const users = ['/users', '/users/create']

export default function PageHeader() {

    return (
        <header className="bg-card">
            <div className="flex justify-between items-center p-5 mb-2">
                <div className="sm:text-3xl text-2xl font-bold">
                    MyBlog
                </div>
                {/* <div>
                    <Link href="/users" className="border rounded border-black p-2">users list</Link>
                    <Link href="/users/create" className="border rounded border-black p-2">create user</Link>
                </div> */}
                <div>
                    <Dropdown />
                </div>
                <div>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );

}