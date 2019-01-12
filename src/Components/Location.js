import React, { Component } from "react";
import { Container, Header, Label } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react' 


const stateOptions = [
    {  value: 'MH', text: 'Maharashtra', district:['Ahmednagar', 'Akola', 'Amarawati', 'Aurangabad', 'Bandra(E)', 'Beed', 'Bhandara', 'Buldhana', 'Chandrapur', 'Dharashiv(Usmanabad)', 'Dhule', 'Gadchiroli', 'Gondiya', 'Hingoli', 'Jalana', 'Jalgaon', 'Kolhapur', 'Latur', 'Mumbai', 'Nagpur', 'Nanded', 'Nandurbar', 'Nashik', 'Osmanabad', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sangli', 'Satara', 'Sholapur', 'Sindhudurg', 'Thane', 'Vashim', 'Wardha', 'Yavatmal'] },
    { value: 'PB', text: 'Punjab', district:['Amritsar', 'Barnala', 'Bhatinda', 'Faridkot', 'Fatehgarh', 'Fazilka', 'Ferozpur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'kapurthala', 'Ludhiana', 'Mansa', 'Moga', 'Mohali', 'Muktsar', 'Nawanshahr', 'Pathankot', 'Patiala', 'Ropar (Rupnagar)', 'Sangrur', 'Tarntaran']},
    { value: 'HR', text: 'Haryana', district:['Ambala', 'Bhiwani', 'Faridabad', 'Fatehabad', 'Gurgaon', 'Hissar', 'Jhajar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh-Narnaul', 'Mewat', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamuna Nagar']},
    { value: 'UP', text: 'Uttar Pradesh', district:['Agra', 'Aligarh', 'Allahabad', 'Ambedkarnagar', 'Auraiya', 'Azamgarh', 'Badaun', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bhadohi(Sant Ravi Nagar)', 'Bijnor', 'Bulandshahar', 'Chandauli', 'Chitrakut', 'Deoria', 'Etah', 'Etawah', 'Faizabad', 'Farukhabad', 'Fatehpur', 'Firozabad', 'Gautam Budh Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hardoi', 'Hathras', 'Jalaun (Orai)', 'Jaunpur', 'Jhansi', 'Jyotiba Phule Nagar', 'Kannuj', 'Kanpur', 'Kaushambi', 'Khiri (Lakhimpur)', 'Lakhimpur', 'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau(Maunathbhanjan)', 'Meerut', 'Mirzapur', 'Muradabad', 'Muzaffarnagar', 'Oraya', 'Padrauna(Kusinagar)', 'Pillibhit', 'Pratapgarh', 'Raebarelli', 'Rampur', 'Saharanpur', 'Sant Kabir Nagar', 'Shahjahanpur', 'Shravasti', 'Siddharth Nagar', 'Sitapur', 'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi']},
    { value: 'KL', text: 'Kerala', district:['Alappuzha', 'Alleppey', 'Calicut', 'Ernakulam', 'Idukki', 'Kannur', 'Kasargod', 'Kollam', 'Kottayam', 'Kozhikode(Calicut)', 'Malappuram', 'Palakad', 'Pathanamthitta', 'Thirssur', 'Thiruvananthapuram', 'Wayanad']}
    ]
const dist = {
    "MH":['Ahmednagar', 'Akola', 'Amarawati', 'Aurangabad', 'Bandra(E)', 'Beed', 'Bhandara', 'Buldhana', 'Chandrapur', 'Dharashiv(Usmanabad)', 'Dhule', 'Gadchiroli', 'Gondiya', 'Hingoli', 'Jalana', 'Jalgaon', 'Kolhapur', 'Latur', 'Mumbai', 'Nagpur', 'Nanded', 'Nandurbar', 'Nashik', 'Osmanabad', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sangli', 'Satara', 'Sholapur', 'Sindhudurg', 'Thane', 'Vashim', 'Wardha', 'Yavatmal'] ,
    "PB":['Amritsar', 'Barnala', 'Bhatinda', 'Faridkot', 'Fatehgarh', 'Fazilka', 'Ferozpur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'kapurthala', 'Ludhiana', 'Mansa', 'Moga', 'Mohali', 'Muktsar', 'Nawanshahr', 'Pathankot', 'Patiala', 'Ropar (Rupnagar)', 'Sangrur', 'Tarntaran'],
    "HR":['Ambala', 'Bhiwani', 'Faridabad', 'Fatehabad', 'Gurgaon', 'Hissar', 'Jhajar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh-Narnaul', 'Mewat', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamuna Nagar'],
    "UP":['Agra', 'Aligarh', 'Allahabad', 'Ambedkarnagar', 'Auraiya', 'Azamgarh', 'Badaun', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bhadohi(Sant Ravi Nagar)', 'Bijnor', 'Bulandshahar', 'Chandauli', 'Chitrakut', 'Deoria', 'Etah', 'Etawah', 'Faizabad', 'Farukhabad', 'Fatehpur', 'Firozabad', 'Gautam Budh Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hardoi', 'Hathras', 'Jalaun (Orai)', 'Jaunpur', 'Jhansi', 'Jyotiba Phule Nagar', 'Kannuj', 'Kanpur', 'Kaushambi', 'Khiri (Lakhimpur)', 'Lakhimpur', 'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau(Maunathbhanjan)', 'Meerut', 'Mirzapur', 'Muradabad', 'Muzaffarnagar', 'Oraya', 'Padrauna(Kusinagar)', 'Pillibhit', 'Pratapgarh', 'Raebarelli', 'Rampur', 'Saharanpur', 'Sant Kabir Nagar', 'Shahjahanpur', 'Shravasti', 'Siddharth Nagar', 'Sitapur', 'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi'],
    "KL":['Alappuzha', 'Alleppey', 'Calicut', 'Ernakulam', 'Idukki', 'Kannur', 'Kasargod', 'Kollam', 'Kottayam', 'Kozhikode(Calicut)', 'Malappuram', 'Palakad', 'Pathanamthitta', 'Thirssur', 'Thiruvananthapuram', 'Wayanad'],
}
class GetLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedState:null,
            isStateSelected:false,
            districts:[]
        }
    }
    componentDidMount(){
        var cb = function (position){
            console.log(position.coords.latitude)
            console.log(position.coords.longitude)
    //         fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyCTJjplJxig0pgEXYVbyoL-_DCM6w3JFDI`)
    //   .then(res => res.json()).then(resp=>{console.log(resp)})

        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(cb);
          } 
          
    }
    render() {
        let {selectedState} = this.state
        return <div>
            <Container fluid>{this.state.selectedState}
                <Header as='h2'>Let us know your location</Header>
                <div style={{margin:'10px'}}>
                <Dropdown
                    placeholder='select State'
                    fluid
                    selection
                    options={stateOptions}
                    onChange={(e,data)=>{
                        // console.log(value)
                        console.log(dist[data.value]);
                        // this.setState({selectedState:data.value, isStateSelected:true})
                        this.setState({selectedState:data.value, isStateSelected:true,districts: dist[data.value].map(dist=>{return {"value":dist, "text":dist}})})
                        
                    }}
                />
                {/* <Dropdown 
                button
                className='icon'
                fluid
                labeled
                icon='world' options={stateOptions} 
                // search
                // selected={{text:selectedState, value:selectedState}}
                selection
                value={{text:"this", value:"this"}}
                // defaultValue={stateOptions[1].value}
                text="select state"
                onChange={(e,data)=>{
                    // console.log(value)
                    console.log(dist[data.value]);
                    // this.setState({selectedState:data.value, isStateSelected:true})
                    this.setState({selectedState:data.value, isStateSelected:true,districts: dist[data.value].map(dist=>{return {"value":dist, "text":dist}})})
                    
                }
                }   
                />   */}
                </div>
                {this.state.isStateSelected&&
                <div>
                    <Dropdown
                    placeholder='select district'
                    fluid
                    selection
                    options={this.state.districts}
  />
                    {/* <Dropdown 
                    style={{margin:'10px'}}
                button
                className='icon'
                fluid
                labeled
                options={this.state.districts} 
                search
                text="select district"
                /> */}
                </div>
                }
            </Container>
        </div>
    }
}
export default GetLocation;