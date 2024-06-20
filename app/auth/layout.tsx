import React from 'react';

const AuthLayout = ({ 
    children 
} : {
    children: React.ReactNode
}) => {
 return (
    <div className="h-full min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 p-4 md:p-8 lg:p-12">
        {children}
    </div>
 );
}

export default AuthLayout;
