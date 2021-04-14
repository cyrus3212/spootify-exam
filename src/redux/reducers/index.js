import { combineReducers } from 'redux';
import newReleases from './newRealease';
import playlists from './featuredPlaylist';
import categories from './categories';

export default combineReducers({
    newReleases,
    playlists,
    categories,
})