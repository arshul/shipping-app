import React, { Component } from 'react'
import { Container, Header, Image,Dropdown } from 'semantic-ui-react'

const cropData = [
    { "Wheat": "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fagrodaily.com%2Fwp-content%2Fuploads%2F2014%2F08%2Fwheatad1508.jpg&f=1" },
    { "Rice": "https://32lxcujgg9-flywheel.netdna-ssl.com/wp-content/uploads/2016/12/brown-rice.jpg" },
    { "Sugar": "https://www.pakissan.com/wp-content/uploads/2017/08/Sugarcane-A-Brief.jpg" },
    { "Yam": "https://guardian.ng/wp-content/uploads/2017/05/cocoyam.jpg" }
]
const quantity=[
    {value:"0-10", text:"0-10" },
    {value:"10-20", text:"10-20" },
    {value:"20-30", text:"20-30" },
    {value:"30-40", text:"30-40" },
]
class SelectCrop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            crop:null
        }
    }
    render() {
        let crops = [];
        for (let i = 0; i < cropData.length; i = i + 2) {
            crops.push(
                //     <Image.Group as='div' size='medium'>
                //      <img className="ui circular image crop" src={cropData[i+1][Object.keys(cropData[i+1])[0]]}/>
                //     <img className="ui circular image crop" src={cropData[i][Object.keys(cropData[i])[0]]}/>
                //   </Image.Group>
                <div className="ui center aligned">
                    <div onClick={()=>{this.setState({crop:Object.keys(cropData[i])[0]})}}  style={{ float: 'left', width: '50%' }}>
                        <img style={{ left: "30%" }} className={this.state.crop==Object.keys(cropData[i])[0]? "ui circular image crop selected":"ui circular image crop"} src={cropData[i][Object.keys(cropData[i])[0]]} />
                        <div >
                            <label>{Object.keys(cropData[i])[0]}</label>
                        </div>
                    </div>
                    
                    <div onClick={()=>{this.setState({crop:Object.keys(cropData[i+1])[0]})}} style={{ float: 'left', width: '50%' }}>
                        <img style={{ left: "30%" }} className={this.state.crop==Object.keys(cropData[i+1])[0]? "ui circular image crop selected":"ui circular image crop"} src={cropData[i + 1][Object.keys(cropData[i + 1])[0]]} />
                        <div>
                            <label>{Object.keys(cropData[i+1])[0]}</label>
                        </div>
                    </div>
                </div>

            )
        }
        return (
            <Container fluid style={{ margin: '10px' }}>
                <Header as='h2'>Select a Crop</Header>
                {crops}
                <Header as='h2'>Quantity (Quintal)</Header>
                <Dropdown
                        placeholder='select Quantity'
                        fluid
                        selection
                        options={quantity}
                        onChange={(e, data) => {
                            // console.log(value)
                            // console.log(dist[data.value]);
                            // this.setState({selectedState:data.value, isStateSelected:true})
                            // this.setState({ selectedState: data.value, isStateSelected: true, districts: dist[data.value].map(dist => { return { "value": dist, "text": dist } }) })
                        }}
                    />
            </Container>
        );
    }
}

export default SelectCrop;