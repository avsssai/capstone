export function selectItemById(state, id) {
	return state.menu.data.find((item) => item.id === Number(id));
}
