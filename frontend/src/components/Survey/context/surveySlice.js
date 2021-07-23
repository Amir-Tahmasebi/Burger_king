export const initState = {
  step: 1,
  site: null,
  contentProduction: null,
  support: null,
  staff: null,
  foods: null,
};

const actionTypes = {
  ADD_STEP_ONE: "ADD_STEP_ONE",
  ADD_STEP_TWO: "ADD_STEP_TWO",
};

export function reducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_STEP_ONE:
      const { site, contentProduction, support } = action.payload;
      return {
        ...state,
        step: 2,
        site,
        contentProduction,
        support,
      };
    case actionTypes.ADD_STEP_TWO:
      const { staff, foods } = action.payload;
      return {
        ...state,
        step : 3,
        staff,
        foods,
      };

    default:
      throw Error(`action type not allowed : ${action.type}`);
  }
}

export const addStepOne = (values) => ({
  type: actionTypes.ADD_STEP_ONE,
  payload: values,
});

export const addStepTwo = (values) => ({
  type: actionTypes.ADD_STEP_TWO,
  payload: values,
});