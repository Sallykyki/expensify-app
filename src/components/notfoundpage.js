import React from "react";
import { Link } from "react-router-dom";

//avoid to load full page
const NotfoundPage = () => (
  <div>
    404! <Link to="/">Go home</Link>
  </div>
);

export default NotfoundPage;
