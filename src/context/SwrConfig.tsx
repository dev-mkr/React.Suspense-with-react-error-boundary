import { SWRConfig } from "swr";
type Props = {
  children: React.ReactNode;
};

const SwrConfig = ({ children }: Props) => {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => {
            if (!res.ok) throw new Error("Fetch failed");
            return res.json();
          }),
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SwrConfig;
