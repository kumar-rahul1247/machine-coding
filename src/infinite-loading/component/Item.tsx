import React from 'react';
import style from './Item.module.css';

interface ItemProps {
    item: string;
    ref?: React.Ref<HTMLLIElement>;
}

// Before React 19 forward Ref Implementation
// const Item = React.forwardRef<HTMLDivElement, ItemProps>(({ item }, ref) => {
//     return (
//         <div ref={ref} className={style['item-container']}>
//             {item}
//         </div>
//     );
// });

// React 19 forward ref not required

const Item = ({ item, ref}: ItemProps ) => {
    return (
        <li ref={ref} className={style['item-container']} role="listitem">
            {item}
        </li>
    );
}


// Item.displayName = 'Item';

export default Item;