import config from '../../config';
import http from '../../api/http';
import { GET_NEW_RELEASES } from './actionTypes';

const getNewReleasesFromDB = async () => {
    const { data } = await http.get(`${config.api.baseUrl}/browse/new-releases`);
    const newReleases = data.albums.items;
    return newReleases;
};

export const getNewReleasesAction = () => async (dispatch) => {
    const data = await getNewReleasesFromDB();
    dispatch({
        type: GET_NEW_RELEASES,
        payload: data
    });
};