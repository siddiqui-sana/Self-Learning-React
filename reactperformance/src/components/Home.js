import React, { lazy, Suspense } from "react";
import { useState } from "react";
import { sum } from "../sum";

const AdminData = lazy(() => wait(1000).then(() => import("./AdminData")));

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => alert(sum(2, 2))}>Add 2+2</button>
      <br />
      <br />
      <button onClick={() => setIsAdmin((prev) => !prev)}>Toggle Admin</button>
      <Suspense fallback={<h2>Loading...</h2>}>
        {isAdmin ? <AdminData /> : <h3>Not Admin</h3>}
      </Suspense>
    </>
  );
}
function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
