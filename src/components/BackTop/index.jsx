import React, {useState} from 'react';
import useDocumentScroll from '../../hooks/useDocumentScroll'
import './styles.scss';

function BackTop() {
    const [shouldScrollHeader, setShouldScrollHeader] = useState(false);
    const MINIMUM_SCROLL = 250;
    useDocumentScroll(callbackData => {
        // eslint-disable-next-line
        const { previousScrollTop, currentScrollTop } = callbackData;
        if (currentScrollTop > MINIMUM_SCROLL) {
            setShouldScrollHeader(true)
        } else {
            setShouldScrollHeader(false)
        }
    });
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    const topStyle = shouldScrollHeader ? 'enable-back-top' : '';
    return (
        <div className= {`back-top smoothscroll-top ${topStyle}`} onClick={() => onTop()}>
            <i class="fa fa-2x fa-arrow-circle-up"></i>
        </div>
    );
}

export default BackTop;