import Link from 'next/link';
import Logoutbtn from './Logoutbtn';

const Navbar = () => {
    const session = false;
    return (
        <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
            <div className="text-xl font-bold">
                <Link href="/" >
                    ContactM
                </Link>
            </div>
            <div className="flex items-center space-x-6">
                {session ? (
                    <>
                        <Link href="/contact" className="hover:text-blue-400 transition-colors">
                            Contacts
                        </Link>
                        <Logoutbtn />
                    </>

                ) : (
                    <>
                        <Link href="/login" className="hover:text-blue-400 transition-colors mr-6">
                            Login
                        </Link>
                        <Link href="/register" className="hover:text-blue-400 transition-colors mr-8">
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
