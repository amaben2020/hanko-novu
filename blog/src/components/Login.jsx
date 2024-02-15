import { Hanko, register } from "@teamhanko/hanko-elements";
import { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const hankoApi =
  import.meta.env.VITE_HANKO_API_URL ??
  "https://bca4c3b7-f47f-4d5b-a355-4440c36ab6bf.hanko.io";

export default function HankoAuth() {
  const navigate = useNavigate();
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const redirectAfterLogin = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(
    () =>
      hanko.onAuthFlowCompleted(() => {
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin],
  );

  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
      console.log("ERROR", error);
    });
  }, []);

  return <hanko-auth />;
}
