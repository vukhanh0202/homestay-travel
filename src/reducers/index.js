import { combineReducers } from 'redux';
import apartments from './apartments';
import breadcrumbs from './breadcrumbs';

const appReducers = combineReducers({
    apartments,
    breadcrumbs
});

export default appReducers;