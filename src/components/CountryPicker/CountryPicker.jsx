import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../API';
const CountryPicker=({handleCountryChange})=>{
    const [countriesData, setCountriesData]=useState([]);
    
    useEffect(()=>{
        const fetchAPIcountries=async()=>{
            setCountriesData(await fetchCountries());
        };
        
        fetchAPIcountries();
    },[setCountriesData]);
    return(
        <FormControl className={styles.formControl}> 
            <NativeSelect defaultValue='' onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value=''>Global</option>
                {countriesData.map((country, id)=><option value= {country.countryName} key={id}>{country.countryName}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;