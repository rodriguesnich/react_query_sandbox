import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "./states/OnLoading";
import OnError from "./states/OnError";
import { MoviesList } from ".";

function MoviesListContainer({ filmNameSearch }: { filmNameSearch: string }) {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary FallbackComponent={OnError}>
        <MoviesList filmNameSearch={filmNameSearch} />
      </ErrorBoundary>
    </Suspense>
  );
}

export default MoviesListContainer;
