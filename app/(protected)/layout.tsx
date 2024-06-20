import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
    children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-y-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 p-4 md:p-6 lg:p-8">
            <Navbar />
            {children}
        </div>
    );
}

export default ProtectedLayout;
