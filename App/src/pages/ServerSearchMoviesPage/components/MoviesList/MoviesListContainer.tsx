import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MoviesList } from ".";
import OnLoading from "../../../../components/MovieListStates/OnLoading";
import OnError from "../../../../components/MovieListStates/OnError";

function MoviesListContainer({ filmNameSearch }: { filmNameSearch: string }) {
  return (
    <Suspense fallback={<OnLoading />}>
      <ErrorBoundary FallbackComponent={OnError}>
        <MoviesList filmNameSearch={filmNameSearch} />
      </ErrorBoundary>
    </Suspense>
  );
}

export default MoviesListContainer;
