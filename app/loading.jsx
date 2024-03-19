import React from 'react'
import {Spinner} from "@nextui-org/react";
export default function Loading () {
  return (
    <div className="flex gap-4">
      <Spinner color="default"/>
      <Spinner color="primary"/>
      <Spinner color="secondary"/>
      <Spinner color="success"/>
      <Spinner color="warning"/>
      <Spinner color="danger"/>
    </div> 
  )
}
