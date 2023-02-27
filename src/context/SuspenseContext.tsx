import { Suspense } from "react";
type Props = {
  children: React.ReactNode;
};

const SuspenseContext = ({ children }: Props) => {
  return (
    <Suspense
      fallback={
        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center text-2xl">
          ...loading
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseContext;
