const state = () => ({
  lists: [],
});
const mutations = {
  addLists(state, param) {
    state.lists.push(param);
  },
  editLists(param) {
    param;
  },
  hapusLists(state, param) {
    state.lists = state.lists.filter((list) => list !== param);
  },
};
const actions = {};

export default {
  state,
  mutations,
  actions,
};
