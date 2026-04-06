import { useState } from "react";

export default function useRefresh() {
  const [refresh, setRefresh] = useState(false);

  const refreshHandler = () => {
    setRefresh((state) => !state);
  };

  return { refresh, refreshHandler };
}
