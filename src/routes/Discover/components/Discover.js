import React, { useEffect } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import httpAuth from '../../../api/httpAuth';
import { getNewReleasesAction, getfeaturedPlaylistAction, getCategoriesAction } from '../../../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import '../styles/_discover.scss';

const Discover = () => {
  const newReleases = useSelector(state => state.newReleases.data);
  const playlists = useSelector(state => state.playlists.data);
  const categories = useSelector(state => state.categories.data);

  const dispatch = useDispatch();

  useEffect(() => {
    const authenticate = async () => {
      const { access_token } = await httpAuth();
      return access_token;
    }

    authenticate().then(access_token => {
      if (access_token) {
        dispatch(getNewReleasesAction());
        dispatch(getfeaturedPlaylistAction());
        dispatch(getCategoriesAction());
      }
    });
  }, [])

  return (
    <div className="discover">
      <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
    </div>
  );
};

export default Discover;
