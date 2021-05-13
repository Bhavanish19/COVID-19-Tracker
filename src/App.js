import React from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchtData} from './API';
import headerImg from './images/image.png';
import {Typography} from  '@material-ui/core';;

class App extends React.Component{
    state={covidData:{},country:'',}
    async componentDidMount(){
        const response=await fetchtData();
        this.setState({covidData:response});
        
    }
    handleCountryChange=async(countryProps)=>{
        const countryData=await fetchtData(countryProps)
        console.log(countryData);
        this.setState({covidData:countryData, country:countryProps});
    }
    render(){
    return(
    <div className={styles.container}>
        <img className={styles.image} src={headerImg} alt='header'/>
        <Cards cardData={this.state.covidData}/>
        <CountryPicker  handleCountryChange={this.handleCountryChange}/>
        <Chart dataChart={this.state.covidData} countryChart={this.state.country}/>
        <Typography color="textSecondary" variant="h6" gutterBottom style={{paddingTop:'10%'}}>Made by Bhavanish Dhamnaskar</Typography>
        
    </div>)
}}
export default App;