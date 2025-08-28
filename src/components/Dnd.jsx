import React from "react";
import { DndContext } from "@dnd-kit/core";

import Draggable from "./Draggable";
import Droppable from "./Droppable";
function Dnd() {
  return (
    <DndContext>
      <Draggable>
        <div className="bg-teal-600 p-8">Draggable</div>
      </Draggable>
      <Droppable>
        <div className="bg-teal-600 p-8">Droppable</div>
      </Droppable>
    </DndContext>
  );
}

export default Dnd;
