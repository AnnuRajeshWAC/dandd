import { useDroppable } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import React from "react";
import { Col } from "react-bootstrap";
import CardCol from "./Card";

const ColContainer = ({ column,handleDelete,handleEdit }) => {
  const { setNodeRef } = useDroppable({
    id: column.name,
  });
const items=column?.templates?.map((item) => item.id.toString())
  return (
    <SortableContext
      id={column.name}
      items={items}
      strategy={rectSortingStrategy}
    >
      <Col
        ref={setNodeRef}
        key={column.name}
        style={{ minWidth: "400px", height: "100%" }}
        className="d-flex flex-column align-items-center"
      >
        <div
          key={column.name}
          className="w-100 p-3 bg-light rounded"
          style={{ height: "100%" }}
          ref={setNodeRef}
          data-droppable="true"
        >
          <h3>{column.name}</h3>

          {column.templates?.map((item) => (
            <CardCol key={item.id} item={item} handleDelete={handleDelete} handleEdit={handleEdit}/>
          ))}
        </div>
      </Col>
    </SortableContext>
  );
};

export default ColContainer;
