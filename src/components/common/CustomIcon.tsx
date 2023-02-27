interface Props {
  iconPath: Icons
  width: number
}

export enum Icons {
  SHUIDI = 'icon-shuidi',
  SEARCH = 'icon-chaxun',
}

const CustomIcon: React.FC<Props> = (props) => {
  return (
    <svg
      style={{ width: `${props.width}px` }}
      className="icon custom-svg"
      aria-hidden="true"
    >
      <use xlinkHref={`#${props.iconPath}`}></use>
    </svg>
  )
}

export default CustomIcon
