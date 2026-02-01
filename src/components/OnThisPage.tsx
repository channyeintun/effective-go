import React, { useEffect, useState } from 'react';
import { TocItem } from '@/types/doc';

interface OnThisPageProps {
    items: TocItem[];
}

const OnThisPage: React.FC<OnThisPageProps> = ({ items }) => {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-10% 0% -80% 0%' }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    return (
        <div className="h-full py-12 px-8 overflow-y-auto custom-scrollbar">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 font-display">
                On This Page
            </h5>
            <nav className="flex flex-col space-y-1">
                {items.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`text-[13px] py-1.5 transition-all duration-300 border-l-2 pl-4 -ml-[1px] ${activeId === item.id
                                ? 'text-go-blue font-semibold border-go-blue opacity-100'
                                : 'text-gray-500 border-transparent opacity-70 hover:opacity-100 hover:text-gray-900'
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
