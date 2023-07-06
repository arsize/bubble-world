declare interface Aricle {
  id: number
  title: string
  pre: string
  hot: number
  like: number
  ctime: string
  world: string
  author: Author
}

declare interface Author {
  name: string
  signature: string
  photo: string
}

declare interface ThemeWorld {
  worldName: string
}

declare interface UserDetailInfo {
  token: string
  name: string
  pic: string
  id: number
}
