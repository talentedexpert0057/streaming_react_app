import axios from 'axios';

export const GET_ORDERS = '[E-COMMERCE APP] GET ORDERS';
export const SET_ORDERS_SEARCH_TEXT = '[E-COMMERCE APP] SET ORDERS SEARCH TEXT';

export function getUsers() {
	const request = axios.get('/api/auth/users');

	return dispatch =>
		request.then(response =>
			dispatch({
				type: GET_ORDERS,
				payload: response.data
			})
		);
}

export function setOrdersSearchText(event) {
	return {
		type: SET_ORDERS_SEARCH_TEXT,
		searchText: event.target.value
	};
}
