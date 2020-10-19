import _ from 'lodash';
import JsonPlaceholder from '../Api/JsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response =  await JsonPlaceholder.get('/posts');
  dispatch({ type : "FETCH_POSTS",payload : response.data});
  };

  export const fetchUser = (id) => async dispatch => {
      const res = await JsonPlaceholder.get(`/users/${id}`); 
      dispatch({type:"FETCH_USER",payload:res.data});
  };

  // export const fetchUser = id =>  dispatch => {
  //   _fetchUser(id, dispatch);
  // }
  // const _fetchUser = _.memorize( async (id, dispatch) => {
  //   const res = await JsonPlaceholder.get(`/users/${id}`); 
  //   dispatch({type:"FETCH_USER",payload:res.data});
  // })