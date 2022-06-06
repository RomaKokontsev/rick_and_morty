import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "../Container/Container";
import NavigationBar from "../NavigationBar/NavigationBar";
import LoaderView from "../Loader/Loader";
import "./App.css";

const HomeView = lazy(() =>
  import("../../views/HomeView" /* webpackChunkName: "home-view" */)
);

const MyWatchListView = lazy(() =>
  import(
    "../../views/MyWatchListView" /* webpackChunkName: "watch-list-view" */
  )
);

function App() {
  return (
    <Container>
      <NavigationBar />
      <Suspense fallback={<LoaderView />}>
        <Routes>
          <Route path="/" element={<HomeView />} exact="true" />
          <Route path="/my-watch-list" element={<MyWatchListView />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
