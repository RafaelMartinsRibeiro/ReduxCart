export const reducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT": {
      const newPeople = [...state.people, action.payload];
      return { ...state, people: newPeople };
    }
    case "CLEAR": {
      return { people: [] };
    }
    case "REMOVE": {
      const removePeople = state.people.filter((people) => {
        return people.id !== action.payload;
      });

      return { ...state, people: removePeople };
    }
    default: {
      return { ...state };
    }
  }
};
