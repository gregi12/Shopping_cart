import './shop.css';
import React from 'react'
import { Product } from './product';
import {PRODUCTS} from '../../products';
export const Shop = () => {
  return ( 
    <div className='shop'>

        <div className='shopTitle'>
            <h1>Fajny Sklep</h1>
        </div>

        <div className='wrapper'>
          <div className='categories'>
          <span><a className='kategoria'>Telefony</a></span>  
          <span><a className='kategoria'>Elektronarzędzia</a></span>
          <span><a className='kategoria'>Sarzęt rtv/agd</a></span>
          <span><a className='kategoria'>Ubrania</a></span>
          <span><a className='kategoria'>Domowe</a></span>
          <span><a className='kategoria'>Sztosy</a></span>
          <span><a className='kategoria'>aromocje</a></span>
          <span><a className='kategoria'>Wkrętatki</a></span>
          <span><a className='kategoria'>Wkrętatki</a></span>
          <span><a className='kategoria'>Wkrętatki</a></span>
          <span><a className='kategoria'>Wkrętatki</a></span>
            
          </div>
          <div className='produkty'>
            <div className='products'>{PRODUCTS.map((product) => (
                <Product data={product}/>
          ))}</div>
          </div>
          

        </div>
        
    </div>
  );
};

