import React from 'react'

interface Props {
  iconPath: Icons
  width: number
  height?: number
  color?: string
}

export enum Icons {
  QIPAO = 'icon-qipao',
  SEARCH = 'icon-chaxun',
  WRIGHT = 'icon-yongyan',
}

const CustomIcon: React.FC<Props> = (props) => {
  return (
    <svg
      style={{
        width: `${props.width}px`,
        height: props.height ? props.height : 'auto',
        color: props.color ? props.color : 'white',
      }}
      className="icon custom-svg"
      aria-hidden="true"
    >
      <use xlinkHref={`#${props.iconPath}`}></use>
    </svg>
  )
}

export default CustomIcon
