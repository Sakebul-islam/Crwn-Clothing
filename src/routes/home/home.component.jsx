import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

function Home() {
  return (
    <>
      <Outlet />
      <Directory />
    </>
  );
}

export default Home;
