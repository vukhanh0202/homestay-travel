import * as types from '../constants/BreadCrumbType';

var initialState = {
    title: 'Tilte',
    breadcrumb: [
        {
            name: 'Home',
        }
    ],
    current: 'Current'
}


const breadcrumbs = (state = initialState, action) => {
    switch (action.type) {
        case types.ROOMS:
            return {
                title: 'Our Rooms',
                breadcrumb: [
                    { name: 'Home', }
                ],
                current: 'Rooms'
            };
        case types.ABOUT:
            return {
                title: 'About Us',
                breadcrumb: [
                    { name: 'Home', }
                ],
                current: 'About Us'
            };
        case types.BLOG:
            return {
                title: 'Blog',
                breadcrumb: [
                    { name: 'Home', }
                ],
                current: 'Blog Grid'
            };
        default: return { ...state };
    }
}

export default breadcrumbs;