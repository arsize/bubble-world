var Mock = require('mockjs')

const data = Mock.mock({
  'list|20-60': [
    {
      id: '@increment(1)',
      title: '@ctitle',
      content: '@cparagraph',
      add_time: '@date(yyyy-MM-dd hh:mm:ss)',
    },
  ],
})

export default data
