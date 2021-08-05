import { Redirect } from "react-router-dom";
import BlankLayout from "../../layoutManagers/Blank";
import NotFoundView from "../../views/notFound/NotFound";
import Page from "./components/Page";

export default function AppRoutes() {
  return (
    <>
      <Page
        exact
        Component={NotFoundView}
        LayoutManager={BlankLayout}
        path={"/not-found"}
      />
      <Redirect to="/not-found" />
    </>
  );
}
