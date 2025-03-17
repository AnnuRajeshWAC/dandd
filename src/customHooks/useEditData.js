import { useState } from "react";

export const useEditData=(handleEdit,item)=>{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const SubmitClose = ({values}) => {
      handleEdit( values,item.id );
      handleClose();
      
    };
    return {open,handleClose,handleOpen,SubmitClose}
  }