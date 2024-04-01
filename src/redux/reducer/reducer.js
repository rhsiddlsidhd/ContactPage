let InitialState = {
  contactList: [],
  keyword: "",
};

export function reducer(state = InitialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };

    case "KEYWORD_SEARCH":
      return { ...state, keyword: payload.keyword };
    default:
      return { ...state };
  }
}
