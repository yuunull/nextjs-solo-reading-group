import { Suspense } from "react";
import Loading from "./loading";

export default function Page() {
  return;
  <>
    <Suspense fallback={<Loading />}>
      <h1>/dashboard/page.tsx</h1>
      <div></div>
    </Suspense>
  </>;
}
