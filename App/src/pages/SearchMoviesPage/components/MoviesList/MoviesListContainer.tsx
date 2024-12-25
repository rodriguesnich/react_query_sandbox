import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import CardsList from ".";
import Loading from "./states/OnLoading";
import OnError from "./states/OnError";

function MoviesListContainer({ filmNameSearch }: { filmNameSearch: string }) {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary FallbackComponent={OnError}>
        <CardsList filmNameSearch={filmNameSearch} />
      </ErrorBoundary>
    </Suspense>
  );
}

export default MoviesListContainer;
