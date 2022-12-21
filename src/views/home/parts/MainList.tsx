import React, { useState, useEffect } from 'react'
import Note from '../components/Note'
import { getNoteList } from '../api/index'

function MainList() {
  const [noteList, setNoteList] = useState(null)
  useEffect(() => {
    getNoteList().then((res) => {
      console.log('拿到了值', res)
    })
  }, [])

  return (
    <div>
      {/* {noteList!.data.map((item, index) => {
        return <Note key={index}></Note>
      })} */}
    </div>
  )
}

export default MainList
