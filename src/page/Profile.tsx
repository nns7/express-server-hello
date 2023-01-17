import { FC } from "react";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Work from "./Work";

const Profile: FC = () => (
  <>
    <Header />
    <About />
    <Work />
    <Contact />
  </>
);

export default Profile;
