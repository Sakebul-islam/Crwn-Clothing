import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  createUserDocumentFromAuth,
  onAuthAtateChangeListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthAtateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;

const Error = () => {
  return (
    <div className="page-error">
      <h1>
        Page Does not Exist <span>⚠</span>
      </h1>
    </div>
  );
};
