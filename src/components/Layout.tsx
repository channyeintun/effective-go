import React from 'react';
import OnThisPage from './OnThisPage';
import { TocItem } from '@/types/doc';

interface LayoutProps {
    children: React.ReactNode;
    tocItems: TocItem[];
}

const Layout: React.FC<LayoutProps> = ({ children, tocItems }) => {
    return (
        <div className="min-h-screen bg-[#fdfdfe] selection:bg-go-light-blue selection:text-go-dark-blue">
            {/* Decorative background elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-go-light-blue/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-go-blue/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="relative z-10 flex min-h-screen">
                {/* Main Content */}
                <div className="flex-1 transition-all duration-300">
                    <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 lg:px-16">
                        <main className="content-card bg-white/80 backdrop-blur-sm p-8 md:p-12 lg:p-16">
                            {children}
                        </main>

                        <footer className="mt-12 py-8 text-center border-t border-gray-100">
                            <p className="text-sm font-medium text-gray-400">
                                © 2026 Go Documentation Myanmar Translation.
                                <span className="block mt-1 text-gray-300">Built with precision using Next.js & Bun.</span>
                            </p>
                        </footer>
                    </div>
                </div>

                {/* Right Sidebar - On This Page */}
                <aside className="hidden xl:block w-72 shrink-0 h-screen sticky top-0 border-l border-gray-100/50 glass">
                    <OnThisPage items={tocItems} />
                </aside>
            </div>
        </div>
    );
};

export default Layout;
