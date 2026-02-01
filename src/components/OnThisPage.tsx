import React from 'react';
import { TocItem } from '@/types/doc';

interface OnThisPageProps {
    items: TocItem[];
}

const OnThisPage: React.FC<OnThisPageProps> = ({ items }) => {
    return (
        <div className="h-full py-12 px-8 overflow-y-auto custom-scrollbar">
            {/* CSS-only approach for scroll position highlighting */}
            <style jsx>{`
                .toc-nav {
                    scroll-target-group: auto;
                }
                .toc-link {
                    border-left: 2px solid transparent;
                    transition: all 0.2s ease;
                }
                .toc-link:target-current {
                    color: var(--go-blue) !important;
                    font-weight: 600;
                    border-left-color: var(--go-blue);
                    background-color: rgba(0, 173, 216, 0.05);
                }
                .toc-link:hover {
                    color: var(--go-dark-blue);
                    background-color: rgba(241, 245, 249, 0.5);
                }
            `}</style>

            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-6 font-display">
                On This Page
            </h5>

            <nav className="toc-nav flex flex-col space-y-1">
                {items.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`toc-link text-[13px] py-1.5 pl-4 -ml-[1px] rounded-r-lg ${item.level === 1 ? 'text-slate-700' : 'text-slate-500'
                            }`}
                        style={{ paddingLeft: `${1 + (item.level - 1) * 0.75}rem` }}
                    >
                        {item.title}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default OnThisPage;
