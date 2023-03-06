import React, { useState } from 'react'
import MdEditor from 'md-editor-rt'
import 'md-editor-rt/lib/style.css'

const Write = () => {
  const [text, setText] = useState('开始创作吧！')
  return (
    <div>
      <MdEditor
        toolbarsExclude={['image', 'github']}
        modelValue={text}
        onChange={setText}
      />
    </div>
  )
}

export default Write
