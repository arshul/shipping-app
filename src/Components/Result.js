import React, {Component} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import cropSelection from './cropSelection';


class Result extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let result = [
            {
                "cost": 983.0879391482722,
                "distance": 81.92399492902268,
                "district": "Panchkula",
                "name": "Panchkul(Kalka)",
                "price": 1500,
                "profit": 21516.912060851726
            },
            {
                "cost": 173.85253110350266,
                "distance": 14.48771092529189,
                "district": "Yamuna Nagar",
                "name": "Jagadhri",
                "price": 1250,
                "profit": 18576.1474688965
            },
            {
                "cost": 173.85253110350266,
                "distance": 14.48771092529189,
                "district": "Yamuna Nagar",
                "name": "Mustafabad",
                "price": 1200,
                "profit": 17826.1474688965
            },
            {
                "cost": 173.85253110350266,
                "distance": 14.48771092529189,
                "district": "Yamuna Nagar",
                "name": "Radaur",
                "price": 1000,
                "profit": 14826.147468896497
            },
            {
                "cost": 173.85253110350266,
                "distance": 14.48771092529189,
                "district": "Ambala",
                "name": "Shahzadpur",
                "price": 1000,
                "profit": 14826.147468896497
            },
            {
                "cost": 983.0879391482722,
                "distance": 81.92399492902268,
                "district": "Kaithal",
                "name": "Cheeka",
                "price": 1000,
                "profit": 14016.912060851728
            },
            {
                "cost": 983.0879391482722,
                "distance": 81.92399492902268,
                "district": "Ambala",
                "name": "Ambala Cantt.",
                "price": 800,
                "profit": 11016.912060851728
            }
        ].map(crop=>{
            return <Card>
            <Card.Content>
              <Card.Header>{crop.name}</Card.Header>
              <Card.Meta>{crop.district}</Card.Meta>
              <Card.Description>

                  
              </Card.Description>
              <h5>Cost:{parseInt(crop.cost)}</h5>
                  <h5>Price:{parseInt(crop.price)}</h5>
                  <h5>Profit:{parseInt(crop.profit)}</h5>
            </Card.Content>
            {/* <Card.Content extra>
              <div className='ui three buttons'>
                <Button   basic color='blue'>
                  {parseInt(crop.price)}
                </Button>
                <Button basic color='red'>
                  {parseInt(crop.cost)}
                </Button>
                <Button basic color='green'>
                  {parseInt(crop.profit)}
                </Button>
              </div>
            </Card.Content> */}
          </Card>
        })
        return (

            
        <Card.Group centered>
        
          {result}
      </Card.Group>)
    }
}
export default Result;