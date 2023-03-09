import styled from 'styled-components'

import WorldPanel from '../views/home/worldPanel'
import Create from '../views/home/create'
import Leaderboard from '../views/home/leaderBoard'
import Collect from '../views/home/collect'
import Recommend from '../views/home/recommend'
import React from 'react'
import WriteRule from '../views/world/writeRule'
import ActivityUser from '../views/world/activityUser'
import BookCollect from '../views/world/bookCollect'
import Chat from '../views/world/chat'

export enum AsideEnum {
  WORLD = '热门世界',
  CREATE = '创作中心',
  LEADERBOARD = '字数排行榜',
  COLLECT = '已订阅',
  RECOMMEND = '推荐关注',
  WRITERULE = '创作规则',
  ACTIVITYUSER = '活跃用户',
  BOOKCOLLECT = '入库作品',
  CHAT = '讨论区',
}

interface Props {
  type: AsideEnum
}

const Block: React.FC<Props> = (props) => {
  let asideBlock
  switch (props.type) {
    case AsideEnum.WORLD:
      asideBlock = <WorldPanel />
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
    case AsideEnum.WRITERULE:
      asideBlock = <WriteRule />
      break
    case AsideEnum.ACTIVITYUSER:
      asideBlock = <ActivityUser />
      break
    case AsideEnum.BOOKCOLLECT:
      asideBlock = <BookCollect />
      break
    case AsideEnum.CHAT:
      asideBlock = <Chat />
      break

    default:
      break
  }
  return <ContainerWrapper>{asideBlock}</ContainerWrapper>
}

const ContainerWrapper = styled.div`
  box-sizing: border-box;
  width: 280px;
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
