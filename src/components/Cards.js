import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Locations!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Chapora_Fort.jpg'
              text='Chapora Fort, located at the northern side of Goa, is famously called Dil Chahta Hai Fort. You can relive those moments by visiting it yourself.'
              label='Explore'
              path="https://en.wikipedia.org/wiki/Chapora_Fort"
            />
            <CardItem
              src='images/Grand.jpg'
              text='Welcome to this award winning luxury destination resort overlooking the calm waters of Bambolim Bay.'
              label='Luxury'
              path="https://www.hyatt.com/en-US/hotel/india/grand-hyatt-goa/goagh?&src=pfxswain_sem_pfx_search_google_india_rooms_sub.br_goa_eng_pfx_search_google_india_rooms_sub.br_name_goagh_eng_grand%20hyatt%20goa&mckv=s-dc_pcrid_495368669201_mtid_529dkt13792&gclid=Cj0KCQjwkruVBhCHARIsACVIiOxN5ayb_JOUTMdFCBsYy0aVQ_HcJuv-HVlNzP8nexl8TJvaXWVIHSwaAgNjEALw_wcB&gclsrc=aw.ds"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/The-Bom-Jesu-Church-in-Goa.jpg'
              text='A towering structure in the Old Goa Church complex, the Bom Jesu church is famous. It houses the mortal remains of St. Francis Xavier, the patron saint of Goa. '
              label='Church'
              path="https://en.wikipedia.org/wiki/Basilica_of_Bom_Jesus1"
            />
            <CardItem
               src='images/The-gorgeous-Dudhsagar-Falls.jpg'
               text='The Dudhsagar falls are a must visit for any adventure or outdoor enthusiast. An ideal way to spend time here is to trek up to the falls.'
               label='Adventure'
               path="https://en.wikipedia.org/wiki/Dudhsagar_Falls"
            />
            <CardItem
              src='images/Three-Kings-Chapel.jpg'
              text='Speaking of the most haunted churches in Goa, the Three King’s Church is definitely the one that will appear on top of the list.'
              label='Mystery'
              path="https://lbb.in/goa/wander-haunted-spirits-3-kings-chapel/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
