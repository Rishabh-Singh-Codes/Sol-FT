import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import Collection from "./pages/Collection";
import Nft from "./pages/Nft";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/collection/:collectionName"
          element={
            <Layout>
              <Collection />
            </Layout>
          }
        />
        <Route
          path="/nft/:nftId"
          element={
            <Layout>
              <Nft />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
