import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route
          path="*"
          element={
            <div className="page-error">
              <h1>
                Page Does not Exist <span>⚠</span>
              </h1>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
