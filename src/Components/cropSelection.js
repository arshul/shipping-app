import React, { Component } from 'react'
import { Menu , Card,Icon,Image } from 'semantic-ui-react'

const cropOptions = [ {  value: 'wheat', text: 'Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. ',source: '../img/wheat.jpeg' },
                      { value: 'Rice', text: 'Rice is the seed of the grass species Oryza sativa or Oryza glaberrima. As a cereal grain, it is the most widely consumed staple food for a large part of the worlds human population.',source:'../img/rice.jpeg'},
                      { value: 'corn', text: 'Maize, also known as corn, is a cereal grain first domesticated by indigenous peoples in southern Mexico about 10,000 years ago.',source:'../img/corn.jpeg'},
                      {value:'sugarcane',text:'Sugarcane, or sugar cane, are several species of tall perennial true grasses of the genus Saccharum.',source:'../img/sugarcane.jpeg'}]


export default class cropSelection extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
      const { activeItem } = this.state
      var result =cropOptions.map(crop=> <Card style={{
        margin:"20px 18px",
        padding:"16px",
        float:"left"
      }}>
        <Image src={crop.source}/>
        <Card.Content>
        <Card.Header>{crop.text}</Card.Header>
        <Card.Meta>
            <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
            <Icon name='user' />
            22 Friends
        </a>
        </Card.Content>
        </Card>)

    return (
        <div>
      <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
          Editorials
        </Menu.Item>

        <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
          Reviews
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </Menu.Item>
      </Menu>

      

    
        {result}
      
          
      </div>
        
      
    )
  }
}
