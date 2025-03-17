import { useState } from "react"

export const useDeleteDate=(handleDelete)=>{
    const [open,setOpen]=useState(false)
    const handleOpen=()=>setOpen(true)
    const handleClose=()=>setOpen(false)
    const submitClose=(id)=>{
      handleDelete(id)
      handleClose()
    }
    return {open,handleOpen,handleClose,submitClose}
  }