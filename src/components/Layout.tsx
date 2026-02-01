import React from 'react';
import OnThisPage from './OnThisPage';
import { TocItem } from '@/types/doc';

interface LayoutProps {
    children: React.ReactNode;
    tocItems: TocItem[];
}

const Layout: React.FC<LayoutProps> = ({ children, tocItems }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Right Sidebar - On This Page */}
            <OnThisPage items={tocItems} />

            {/* Main Content */}
            <div className="xl:mr-64">
                <div className="max-w-3xl mx-auto px-6 py-10 md:px-10 lg:px-12">
                    <main className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-10 lg:p-12">
                        {children}
                    </main>

                    <footer className="mt-8 py-6 text-center text-sm text-gray-500">
                        <p>© 2026 Go Documentation Myanmar Translation. Built with Next.js and Bun.</p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Layout;
