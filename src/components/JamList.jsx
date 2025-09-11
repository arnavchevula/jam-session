import React, { useState, useEffect } from "react";
import { Sortable } from "./Sortable";
import Stopwatch from "./Stopwatch";

function JamList() {
  return (
    <>
      <section className="mx-auto container">
        <div className="w-full mx-auto lg:w-1/2  px-2">
          <Stopwatch />
          <Sortable />
        </div>
      </section>{" "}
    </>
  );
}
export default JamList;
