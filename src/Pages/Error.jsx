import { Link } from "react-router-dom";

import errorImg from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

export default function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={errorImg} alt="error image" />
        <h3>Error</h3>
        <p>Error in this page</p>
        <Link to="/">Back ro home</Link>
      </div>
    </Wrapper>
  );
}
