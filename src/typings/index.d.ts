declare interface LoginInfo {
  username: string
  password: string
}

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
