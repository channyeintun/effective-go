import React from 'react';
import { TocItem } from '@/types/doc';

interface SidebarProps {
    items: TocItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
    return (
        <aside className="hidden lg:block w-72 h-screen fixed top-0 left-0 overflow-y-auto bg-gray-light border-right border-border-color p-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4 border-none p-0 mt-0">
                Effective Go (မြန်မာဘာသာ)
            </h2>
            <nav>
                <ul className="space-y-2">
                    {items.map((item) => (
                        <li
                            key={item.id}
                            style={{ paddingLeft: `${(item.level - 1) * 1}rem` }}
                        >
                            <a
                                href={`#${item.id}`}
                                className={`text-sm hover:text-go-blue transition ${item.level === 1 ? 'font-semibold text-foreground' : 'text-gray-600'
                                    }`}
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
