/*get image action to dispatch action of type GET_IMAGES which will be captured by reducer and saga with id and limit
properties for to pass additional data with action*/

export const getImages = (id = 1, limit = 10) => ({
  type: "GET_IMAGES",
  id: id,
  limit: limit,
});
