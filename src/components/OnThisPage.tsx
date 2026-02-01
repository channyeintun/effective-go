import React from 'react';
import { TocItem } from '@/types/doc';

interface OnThisPageProps {
    items: TocItem[];
}

const OnThisPage: React.FC<OnThisPageProps> = ({ items }) => {
    return (
        <>
            {/* Internal CSS to bypass build optimizer */}
            <style>{`
                .toc-nav {
                    scroll-target-group: auto;
                }
                .toc-link {
                    border-left: 2px solid transparent;
                    padding-left: 0.5rem;
                    margin-left: -0.5rem;
                    transition: all 0.2s ease;
                }
                .toc-link:target-current {
                    color: var(--go-blue) !important;
                    font-weight: 500;
                    border-left-color: var(--go-blue);
                }
                .toc-link:hover {
                    color: var(--go-blue);
                }
            `.toString()}</style>
            <aside className="on-this-page hidden xl:block w-64 fixed top-0 right-0 h-screen overflow-y-auto py-10 px-6 border-l border-gray-200 bg-white">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                    On This Page
                </h3>
                <nav className="toc-nav">
                    <ul className="space-y-1">
                        {items.map((item) => (
                            <li
                                key={item.id}
                                style={{ paddingLeft: `${(item.level - 1) * 0.75}rem` }}
                            >
                                <a
                                    href={`#${item.id}`}
                                    className={`toc-link block text-xs py-1 ${item.level === 1
                                            ? 'text-gray-700'
                                            : 'text-gray-500'
                                        }`}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default OnThisPage;
