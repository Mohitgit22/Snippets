"use client";
import Link from "next/link"; // No need for relative path
import { usePathname } from "next/navigation"; // Correct import

const Navbar = () => {
    const pathname = usePathname();

    // Define routes where navbar should be visible (moved outside for optimization)
    const visibleRoutes = [
        "/",
        "/snippet/new",
        "/snippet/[id]",
    ];

    // Check if the current route is in the visibleRoutes array
    const isVisible = visibleRoutes.some((route) => pathname.startsWith(route));

    if (isVisible) {
        return (
            <nav
                className="px-[10%] bg-black text-white shadow-lg sticky top-0 left-0 w-full py-4 flex justify-between items-center"
                aria-label="Main Navigation"
            >
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-wide text-white hover:text-gray-500 transition-colors duration-300"
                    aria-label="SnippetStack Homepage"
                >
                    SnippetStack
                </Link>

                <div className="text-sm font-medium italic text-gray-400 hover:text-gray-300 transition-colors duration-300">
                    Your one-stop hub for code snippets.
                </div>
            </nav>
        );
    }

    // If not visible route, return null
    return null;
};

export default Navbar;
