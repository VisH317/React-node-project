import axios from 'axios'
import keys from './types'

export const fetchUser = () => async dispatch => {
    const response = await axios.get('/api/current_user')

    dispatch({type: keys.fetchUserKey, payload: response.data})
}
