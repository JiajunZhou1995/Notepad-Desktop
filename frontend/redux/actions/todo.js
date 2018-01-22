import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_ITEM = 'ADD_ITEM'

export function fetchItems() {
	const request = axios.get('http://aws.jiajunzhou.ca:3000/note');

	return {
		type: FETCH_ITEMS,
		payload: request
	};
}

export function updateItem(item) {
	const request = axios.put(`http://aws.jiajunzhou.ca:3000/note/${item.id}`, item);

	return {
		type: UPDATE_ITEM,
		payload: request
	};
}

export function deleteItem(itemId) {
	const request = axios.delete(`http://aws.jiajunzhou.ca:3000/note/${itemId}`);

	return {
		type: DELETE_ITEM,
		payload: request
	};
}

export function addItem(todo) {
	const request = axios.post(`http://aws.jiajunzhou.ca:3000/note/add`, todo);
	
	return {
		type: ADD_ITEM,
		payload: request
	};
}