import { Hanko } from "@teamhanko/hanko-elements";
import { useEffect, useMemo, useState } from "react";
const hankoApi =
  import.meta.env.VITE_HANKO_API_URL ??
  "https://bca4c3b7-f47f-4d5b-a355-4440c36ab6bf.hanko.io";

// const hankoApi = import.meta.env.VITE_HANKO_API_URL; // for Vite

// interface HankoUser {
//   id: string;
//   email: string;
//   loading: boolean;
//   error: string | null;
// }

export function useUserData() {
  const hanko = useMemo(() => new Hanko(hankoApi), []);
  const [userState, setUserState] = useState({
    id: "",
    email: "",
    loading: true,
    error: null,
  });

  useEffect(() => {
    hanko?.user
      .getCurrent()
      .then(({ id, email }) => {
        setUserState({ id, email, loading: false, error: null });
        console.log({ id, email, loading: false, error: null });
      })
      .catch((error) => {
        setUserState((prevState) => ({ ...prevState, loading: false, error }));
      });
  }, [hanko]);

  return userState;
}
