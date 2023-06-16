import { Link } from "react-router-dom";

import errorImg from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

export default function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={errorImg} alt="error image" />
        <h3>Ohh! Page not found!</h3>
        <p>Error in this page</p>
        <Link to="/">Back home</Link>
      </div>
    </Wrapper>
  );
}
