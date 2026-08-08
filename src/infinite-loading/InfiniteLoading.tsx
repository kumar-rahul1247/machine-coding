import React, { useState } from 'react';
import style from './InfiniteLoading.module.css';
import { ListItem } from './component';
import useSearchFetch from './hooks/useSearchFetch';

const InfiniteLoading: React.FC = () => {
    const [page, setPage] = useState(1);
    const { items, loading, hasMore, error } = useSearchFetch('javascript', page);

    const goNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div className={style.container}>
            <div className={style['infinite-card']}>
                <h1>Infinite Loading </h1>
                {/* {loading && <p>Loading...</p>} */}
                {error && <p>Error: {error}</p>}
                {/* {!loading && !error && items.length === 0 && <p>No results found.</p>} */}
                {/* {hasMore && !loading && !error && <p>Scroll down to load more...</p>} */}
                {!hasMore && !loading && !error && <p>No more results.</p>}
                <ListItem items={items} goNextPage={goNextPage} loading={loading} />
            </div>

        </div>
    );
}

export default InfiniteLoading;