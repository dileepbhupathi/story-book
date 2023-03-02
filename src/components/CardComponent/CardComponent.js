import { Card } from 'antd'
import React from 'react'
import './CardComponent.scss'
import {BsMouse2} from 'react-icons/bs'

export const CardComponent = () => {
  return (
    <Card className='card-component-container'>
      <div>
        <BsMouse2/>
        <h1>Right Click Menu</h1>
        <p>Custom Bootstrap 4 xxs & xxl classes delivers better experiences for smaller and larger screens.</p>
      </div>
    </Card>
  )
}
