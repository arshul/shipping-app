import React, { Component } from 'react'
import { Container, Header,Divider,Icon,Button, Image,Dropdown,Input } from 'semantic-ui-react'
import {withRouter } from 'react-router-dom'
const cropData = [
    { "Wheat": "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fagrodaily.com%2Fwp-content%2Fuploads%2F2014%2F08%2Fwheatad1508.jpg&f=1" },
    { "Rice": "https://32lxcujgg9-flywheel.netdna-ssl.com/wp-content/uploads/2016/12/brown-rice.jpg" },
    { "Tomato": "http://telugu.v6news.tv/img/2016/08/tomato-crop.jpg" },
    {"Onion": "https://www.gracegardenandhomestead.com/wp-content/uploads/2017/10/Onion-Bumper-Crop-500x263.jpg"},
    {"Potato": "http://images.skymetweather.com/content/wp-content/uploads/2015/03/Potato-crop-in-uttar-pradesh-429x310.jpg"},
    {"Brinjal": "https://www.planetnatural.com/wp-content/uploads/2015/05/gmo-eggplant.jpg"}
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
            crop:null,
            quantity:null,
            lat:"",
            long:"",
            state:""
        }
    }
    onSubmit(){
        var cb = function (position) {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyCTJjplJxig0pgEXYVbyoL-_DCM6w3JFDI`)
        .then(res => res.json()).then(resp=>{
            console.log(resp)
            const req = new Request("http://192.168.43.188:5000/api/v1/get-values")
            let x = resp.plus_code.compound_code.split(', ')[0].split(" ")
            console.log(x)
            let dat = {
            "quantity": parseInt(this.state.quantity),
            // "lat": position.coords.latitude,
            // "state": x[1],
            "lat":29.98451,
            "long":76.85051,
            "state": "Haryana",
            "crop": this.state.crop,
            // "long": position.coords.longitude
        }
        console.log(dat)
        let myInit = {  
            method: "POST",
            data: JSON.stringify(dat),
            headers: {'content':'application/json'}
            };
        fetch(req,myInit).then(res=>res.json()).then(resp=>{console.log(resp)})
        })
        
        }
        if (navigator.geolocation) {
            console.log("in if")
            navigator.geolocation.getCurrentPosition(cb.bind(this));
        } else{
            this.props.history.push({path:'/locate',crop:this.state.crop,quantity:this.state.quantity})

        }
        console.log("in send")
    }
    render() {
        let crops = [];
        for (let i = 0; i < cropData.length; i = i + 2) {
            crops.push(
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
            <Container fluid >
                <Header as='h2'>Select a Crop</Header>
                {crops}
                <Divider horizontal>And</Divider>
                
                <Header style={{textAlign:'center'}} as='h2'><Icon name='law' />
                    Quantity {this.state.quantity}</Header>
                <Input 
                placeholder='Quintals'
                type='number' 
                onChange={(e, data) => {
                    // console.log(value)
                    console.log(data.value);
                    this.setState({quantity:data.value, isStateSelected:true})
                    // this.setState({ selectedState: data.value, isStateSelected: true, districts: dist[data.value].map(dist => { return { "value": dist, "text": dist } }) })
                }}
                />
                <div>
                <Button onClick={()=>this.onSubmit()} style={{marginTop:"5px"}} primary>Submit</Button>
                </div>
                
            </Container>
        );
    }
}

export default withRouter(SelectCrop);