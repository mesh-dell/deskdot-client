import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex h-screen flex-col items-center justify-center *:my-2 text-dark-green">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-lg">Sorry, an unexpected error occured.</p>
      <p>
        <i className="text-light-grey">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
