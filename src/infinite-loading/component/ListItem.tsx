import React, { useCallback, useRef, useEffect } from 'react';
import style from './ListItem.module.css';
import Item from './Item';

interface ListItemProps {
    items: Array<string>;
    loading: boolean;
    goNextPage: () => void;

}

const ListItem = ({ items, goNextPage, loading }: ListItemProps) => {
    const observer = useRef<IntersectionObserver | null>(null);
    const listRef = useRef<HTMLDivElement | null>(null);

    // Native Scroll Techique
    // const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    //     const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    //     if (scrollHeight - scrollTop === clientHeight) {
    //         goNextPage();
    //     }
    // };

    const lastElementRef = useCallback((node: HTMLDivElement | null) => {
        if (loading) return;

        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(
            (entries) => {
                if (entries[0]?.isIntersecting) {
                    console.log('trigger');
                    goNextPage();
                }
            },
            {
                root: listRef.current, // use the scroll container as root so rootMargin works
                rootMargin: '200px',
                threshold: 0.0,
            }
        );

        if (node) {
            observer.current.observe(node);
        }
    }, [goNextPage, loading]);


    useEffect(() => {
        return () => {
            if (observer.current) observer.current.disconnect();
        };
    }, []);

    return (
        <div ref={listRef} className={style['list-item']}>
            {
                items.map((item, index) => (
                    <Item
                        key={index}
                        item={item}
                        ref={index == items.length-1 ? lastElementRef : null} />
                ))
            }

            {loading && <p>Loading more items...</p>}
        </div>
    );
};

export default ListItem;