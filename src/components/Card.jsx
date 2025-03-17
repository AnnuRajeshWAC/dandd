import React from "react";
import Card from "react-bootstrap/Card";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DeleteModal from "./DeleteModal";
import { useDragDrop } from "../customHooks/usedragDrop";
import EditModal from "./EditModal";
const CardCol = ({item,handleDelete,handleEdit }) => {
  if (!item) return console.log("hello");
  ;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item?.id.toString(), data: { title:item?.title, description:item?.description } });
  return (
    <Card
      ref={setNodeRef}
      
      {...attributes}
      style={{
        width: "18rem",
        padding: "10px",
        marginBottom: "10px",
        background: "lightblue",
        cursor: "grab",
        transform: CSS.Transform.toString(transform),

        transition: transition,
      }}
    >
      <Card.Body {...listeners}>
        <Card.Title>
          <div className="d-flex gap-5 justify-content-between">
          <p>{item.title}</p>
          {/* <Button variant="danger">delete</Button> */}
         
          </div>
        </Card.Title>
        <div className="d-flex">
          {item.description ? <p>{item.description}</p> : null}
        </div>
      </Card.Body>
      <Card.Footer>
      <div className="d-flex gap-2" >
          <EditModal handleEdit={handleEdit} item={item}/>
          <DeleteModal id={item.id} handleDelete={handleDelete}/>
          </div>
      </Card.Footer>
    </Card>
    
  );
};

export default CardCol;
