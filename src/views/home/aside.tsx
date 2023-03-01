import styled from 'styled-components'

import World from './world'
import Create from './create'
import Leaderboard from './leaderBoard'
import Collect from './collect'
import Recommend from './recommend'

export enum AsideEnum {
  WORLD = '热门世界',
  CREATE = '创作中心',
  LEADERBOARD = '字数排行榜',
  COLLECT = '已订阅',
  RECOMMEND = '推荐关注',
}

interface Props {
  type: AsideEnum
}

const Block = (props: Props) => {
  let asideBlock
  switch (props.type) {
    case AsideEnum.WORLD:
      asideBlock = <World />
      break
    case AsideEnum.COLLECT:
      asideBlock = <Collect />
      break
    case AsideEnum.CREATE:
      asideBlock = <Create />
      break
    case AsideEnum.RECOMMEND:
      asideBlock = <Recommend />
      break
    case AsideEnum.LEADERBOARD:
      asideBlock = <Leaderboard />
      break

    default:
      break
  }
  return <ContainerBox>{asideBlock}</ContainerBox>
}

const ContainerBox = styled.div`
  box-sizing: border-box;
  width: 280px;
  padding: 15px;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
  margin-bottom: 20px;

  .block-line {
    font-weight: 500;
    font-size: 14px;
    color: #444;
    display: flex;
    align-items: center;
    .title {
      margin-left: 5px;
    }
  }
`

export default Block
