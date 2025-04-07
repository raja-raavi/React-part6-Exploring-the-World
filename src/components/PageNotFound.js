import { useRouteError } from "react-router";

const PageNotFound = () => {
  const err = useRouteError();
  //console.log(err);
  return (
    <div className="error">
      <h1>Oops.. Something Went Wrong!!</h1>
      <h2>
        {err.status} : {err.statusText}
      </h2>
    </div>
  );
};

export default PageNotFound;
