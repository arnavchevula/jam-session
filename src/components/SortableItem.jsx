import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Musician from "./Musician";

export function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Musician
        handleSelectChange={props.handleSelectChange}
        id={props.id}
        selectedValues={props.selectedValues}
        name={props.name}
        email={props.email}
        instagram={props.instagram}
        phoneNum={props.phoneNum}
        instrument={props.instrument}
      />{" "}
    </div>
  );
}
