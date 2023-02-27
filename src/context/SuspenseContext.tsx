import { Suspense } from "react";
import { LoadingComponent } from "../components";
type Props = {
  children: React.ReactNode;
};

const SuspenseContext = ({ children }: Props) => {
  return <Suspense fallback={<LoadingComponent />}>{children}</Suspense>;
};

export default SuspenseContext;
