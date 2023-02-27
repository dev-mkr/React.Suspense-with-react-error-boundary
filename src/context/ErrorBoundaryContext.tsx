import { ErrorBoundary } from "react-error-boundary";
type Props = {
  children: React.ReactNode;
};

const ErrorBoundaryContext = ({ children }: Props) => {
  return (
    <ErrorBoundary
      fallback={
        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center text-2xl">
          Something went wrong.
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryContext;
