import { ErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "../components";
type Props = {
  children: React.ReactNode;
};

const ErrorBoundaryContext = ({ children }: Props) => {
  return (
    <ErrorBoundary fallback={<ErrorComponent />}>{children}</ErrorBoundary>
  );
};

export default ErrorBoundaryContext;
