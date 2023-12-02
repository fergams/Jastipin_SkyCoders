import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = () => (
  <Card className='listmakanan mt-4 mb-4' >
    <Image src='./src/assets/img/Produk/Produk-2.jpg'wrapped ui={false} />
    <Card.Content>
      <Card.Header>Produk</Card.Header>
      <Card.Description>
        Makanan khas indo
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='cart' className=''/>
    Rp 100.000
      </a>
    </Card.Content>
  </Card>
  
)

export default CardExampleCard