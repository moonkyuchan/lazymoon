import sidebarSlice from "./Sidebar";
import uidSlice from "./Uid";
import articleSlice from "./Article";

const reducers = {
  sidebar: sidebarSlice,
  uid: uidSlice,
  article: articleSlice,
};

export default reducers;
