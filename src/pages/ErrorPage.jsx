import { useRouteError } from "react-router-dom";
import LinkComponent from "../components/LinkComponent";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-4">
      <h1 className="text-2xl sm:text-3xl  font-bold">Oops!</h1>
      <p className="text-lg sm:text-xl">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <LinkComponent
        bgColor="bg-clr-secondary"
        textColor="text-white"
        message="Go Home"
        routerLink="/"
      />
    </div>
  );
}
