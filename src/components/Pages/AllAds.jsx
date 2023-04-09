import React, { useEffect } from 'react'
import './style.css'
import Footer from '../footer/footer'

import { Ad } from '../AddNewad/Ad'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAds, fetchCategory } from '../../reducers/adsReducer'

export const AllAds = () => {

  const dispatch = useDispatch()

  const { ads, category } = useSelector(state => state.ads)

  // const isAdsLoading = ads.status === 'loading'
  // const isCategoryLoading = category.status === 'loading'

  useEffect(() => {
    dispatch(fetchAds())
    dispatch(fetchCategory())
  }, [])

  console.log(ads)
  console.log(category)

  return (
    <div className='ad-wrapper'>
        

      <div className="ad-container">
        <div className="title-category">
          <div style={{paddingRight: "40px"}}><h3 className='category-title active'>Женская одежда и обувь</h3></div>
          <h3 className='category-title'>Мужская одежда и обувь</h3>
        </div> 

        <div className="category">
          {(category.items).map((obj) => (
            <div className="category-div">
              <span>{obj}</span>
            </div>
          ))}
        </div>

        
      </div>
      <div className='all-ads'>
          
          {(ads.items).map((obj) => 
              (
                
              <Ad
                _id={obj._id}
                name={obj.name}
                priceDay={obj.priceDay}
                viewsCount={obj.viewsCount}
              />
            ), )}
            
          {/* {[...Array(20)].map(() => {
            return (<Ad
              
            />)}
          )} */}
        </div>
      <Footer />
    </div>
    
  )
}
