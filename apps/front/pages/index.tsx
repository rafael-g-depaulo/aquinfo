import { useRouter } from "next/router";
import { useEffect } from "react";

export function Index() {
  const router = useRouter()

  // go to /home by default
  useEffect(() => {
    router.replace("/home")
  }, [router])

  return (
    <></>
  );
}

export default Index;
