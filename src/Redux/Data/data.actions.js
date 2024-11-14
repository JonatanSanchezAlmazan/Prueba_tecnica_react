import store from "../store";

const { dispatch } = store;

export const getContent = async (type) => {
  dispatch({ type: "LOADING" });
  try {
    const response = await fetch("/data/sample.json");
    const res = await response.json();
    const data = res.entries;
    const filteredData = data
      .filter(
        (item) =>
          item.releaseYear >= 2010 && item.programType === type && item.title
      )
      .slice(0, 20)
      .sort((a, b) => a.title.localeCompare(b.title));

    dispatch({
      type: "GET_CONTENT",
      payload: filteredData,
      contentType: type,
    });

    // dispatch({ type: "GET_CONTENT", payload: filteredData, contentType: type });
  } catch (error) {
    dispatch({ type: "ERROR" });
  }
};

const getItem = async ({ title }) => {
  const response = await fetch("/data/sample.json");
  const res = await response.json();
  const data = res.entries;
  const item = data.find((item) => item.title === title);
  dispatch({ type: "GET_ITEM", payload: item });
};

export const openModal = async ({ title }) => {
  await getItem({ title });
  dispatch({ type: "OPEN_MODAL" });
};

export const closeModal = () => {
  dispatch({ type: "CLOSE_MODAL" });
};
