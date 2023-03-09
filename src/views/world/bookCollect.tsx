import { AsideEnum } from '@/components/aside'
import { BookOutlined } from '@ant-design/icons'
import { Card, Carousel } from 'antd'
import React from 'react'
const BookCollect = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '100px',
    lineHeight: '100px',
    textAlign: 'center',
  }
  return (
    <Card
      title={
        <div>
          <BookOutlined />
          <span style={{ marginLeft: '5px' }}>{AsideEnum.BOOKCOLLECT}</span>
        </div>
      }
      size="small"
      loading={false}
    >
      <Carousel afterChange={onChange} autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
      </Carousel>
    </Card>
  )
}

export default BookCollect
