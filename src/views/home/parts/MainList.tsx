import React, { useState, useEffect } from 'react'
import { getNoteList } from '../api/index'
import { Note } from '@/interface'
import NoteBox from '../components/NoteBox'
import useName from '@/hooks/useName'
import useAge from '@/hooks/useAge'
import useBearStore from '@/store'

function MainList() {
  const bear = useBearStore((state) => state.bears)
  const increaseFn = useBearStore((state) => state.increase)
  return (
    <div>
      main:{bear} <div>点击</div>
    </div>
  )
}

export default MainList
