import Header from "./views/Header/Header";
import Footer from "./views/Footer/Footer";
import Main from "./views/Main/Main";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAccessToken } from "./store/auth/authSlice";

const App = () => {
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector((state) => state.auth);

  console.log("В токене сейчас: ", accessToken);

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken());
    }
  }, [dispatch, accessToken]);

  return (
    <>
      <Header />
      {!loading && accessToken ? <Main /> : <div>Загрузка...</div>}
      <Footer />
    </>
  );
};

export default App;
