// This reducer will perform state mutations based on action that is dispatched from action and sag
const ImageReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_IMAGES":
      return { ...state, loading: true };
    case "IMAGES_RECEIVED":
      return {
        ...state,
        images: action.json,
        loading: false,
        limit: action.limit,
      };
    default:
      return state;
  }
};
export default ImageReducer;
