import config from '../../config';
import http from '../../api/http';
import { GET_CATEGORIES } from './actionTypes';

const getCategoriesFromDB = async () => {
    const { data } = await http.get(`${config.api.baseUrl}/browse/categories`);
    const categories = data.categories.items;
    return categories;
};

export const getCategoriesAction = () => async (dispatch) => {
    const data = await getCategoriesFromDB();
    dispatch({
        type: GET_CATEGORIES,
        payload: data
    });
};