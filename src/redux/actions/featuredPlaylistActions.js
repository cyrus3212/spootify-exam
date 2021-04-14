import config from '../../config';
import http from '../../api/http';
import { GET_FEATURED_PLAYLIST } from './actionTypes';

const getfeaturedPlaylistFromDB = async () => {
    const { data } = await http.get(`${config.api.baseUrl}/browse/featured-playlists`);
    const playlists = data.playlists.items;
    return playlists;
};

export const getfeaturedPlaylistAction = () => async (dispatch) => {
    const data = await getfeaturedPlaylistFromDB();
    dispatch({
        type: GET_FEATURED_PLAYLIST,
        payload: data
    });
};