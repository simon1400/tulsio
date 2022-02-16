import { useReducer, createContext } from "react";
import Cookies from 'js-cookie'

let reducer = (state, action) => {
  switch (action.type) {
    case "breadcrumbs":
      Cookies.set('breadcrumbs', JSON.stringify([ ...action.state ]))
      return { ...state, breadcrumbs: action.state }
    case "meta":
      Cookies.set('meta', JSON.stringify({ ...action.state }))
      return { ...state, meta: action.state }
    case "slug":
      Cookies.set('slug', action.state)
      return { ...state, slug: action.state }
    default:
      console.error('action.type: "' + action.type + '" is not implemented')
      return state
  }
};

const initialState = {
  breadcrumbs: Cookies.get('breadcrumbs') ? JSON.parse(Cookies.get('breadcrumbs')) : [],
  meta: Cookies.get('meta') ? JSON.parse(Cookies.get('meta')) : {
    title: '',
    description: '',
    image: {
      data: null
    }
  },
  slug: ''
}

const DataStateContext = createContext(initialState);

function DataProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataStateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DataStateContext.Provider>
  );
}

export { DataStateContext, DataProvider };
