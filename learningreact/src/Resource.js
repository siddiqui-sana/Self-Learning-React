//Understandong useEffect Hook
import React, { useState, useEffect } from "react";

const Resource = () => {
  const [resourceType, setResourceType] = useState("");

  useEffect(() => {
    console.log("Resourse Type Changed");
  }, [resourceType]); //Each time the resourceType changes the function insde the useEffect gets executed.

  return (
    <div>
      <button onClick={() => setResourceType("Posts")}>Posts</button>
      <button onClick={() => setResourceType("Users")}>Users</button>
      <button onClick={() => setResourceType("Comments")}>Comments</button>
      <h1>{resourceType}</h1>
    </div>
  );
};

export default Resource;
