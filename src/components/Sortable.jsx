import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";

import { SortableItem } from "./SortableItem";

export function Sortable() {
  const [musicians, setMusicians] = useFetch();
  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelectChange = (event, index) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues.push({ id: index, status: event.target.value });
    setSelectedValues(newSelectedValues);
  };

  const handleSubmit = e => {
    console.log(selectedValues);
    axios
      .put("http://localhost:3000/update-musician", {
        selectedValues
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={musicians && musicians.map(musician => musician._id)}
        strategy={verticalListSortingStrategy}
      >
        {musicians &&
          musicians.map(musician => (
            <SortableItem
              handleSelectChange={handleSelectChange}
              selectedValues={selectedValues}
              key={musician._id}
              id={musician._id}
              name={musician.name}
              email={musician.email}
              instagram={musician.instagram}
              phoneNum={musician.phoneNum}
              instrument={musician.instrument}
            />
          ))}
      </SortableContext>
      <button
        onClick={handleSubmit}
        type="submit"
        className="py-3 px-12 bg-teal-500 hover:bg-teal-600 mr-5 rounded-full text-white text-lg focus:outline-none w-full"
      >
        Lock In!
      </button>
    </DndContext>
  );

  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id !== over.id) {
      setMusicians(items => {
        const oldIndex = items.findIndex(item => item._id === active.id);
        const newIndex = items.findIndex(item => item._id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}
