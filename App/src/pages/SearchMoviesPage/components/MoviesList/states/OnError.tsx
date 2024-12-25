import { FallbackProps } from 'react-error-boundary';

function OnError({ error }: FallbackProps) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
    </div>
  );
}

export default OnError;
