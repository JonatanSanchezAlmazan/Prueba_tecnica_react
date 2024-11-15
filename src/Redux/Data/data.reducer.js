const INITIAL_CONTENT_STATE = {
  content: [],
  item: {},
  loading: false,
  error: false,
  isModal: false,
  contentType: "",
};

export const contentReducer = (state = INITIAL_CONTENT_STATE, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
        error: false,
        content: [],
        isModal: false,
      };
    case "GET_CONTENT":
      return {
        ...state,
        loading: false,
        error: false,
        content: [...action.payload],
        contentType: action.contentType,
      };
    case "GET_ITEM":
      return {
        ...state,
        loading: false,
        error: false,
        item: { ...action.payload },
        isModal: true,
      };
    case "ERROR":
      return { ...state, loading: false, error: true };
    case "OPEN_MODAL":
      return { ...state, isModal: true };
    case "CLOSE_MODAL":
      return { ...state, isModal: false };
    default:
      return state;
  }
};
