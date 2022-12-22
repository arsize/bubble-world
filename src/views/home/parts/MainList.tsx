import React, { useState, useEffect } from 'react'
import { getNoteList } from '../api/index'
import { Note } from '@/interface'
import NoteBox from '../components/NoteBox'

function MainList() {
  const [noteList, setNoteList] = useState(Array<Note>)
  useEffect(() => {
    const Fn = async () => {
      let result = await getNoteList()
      let arr = result.data.list
      setNoteList(arr)
    }
    Fn()
  }, [])

  return (
    <div>
      {noteList.map((item, index) => {
        return (
          <NoteBox detail={item}>
            <div>children</div>
          </NoteBox>
        )
      })}
    </div>
  )
}

export default MainList
