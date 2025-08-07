import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Divider, FormControl, FormControlLabel, RadioGroup, Typography } from '@mui/material';
import Radio from '@mui/material/Radio'
import { MenuCard } from './MenuCard';



const categories=[
    "pizza",
    "biryani",
    "burger",
    "chicken",
    "rice"
]

const foodTypeOptions = [
  {label:"All",value:"all"},
  {label:"Vegetarian only",value:"vegetarian"},
  {label:"Non-vegetarian",value:"non_vegetarian"},
  {label:"Seasonal",value:"seasonal"},
]

const menu=[1,1,1,1,1,1,1,1] 
export const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all")
    
    const handleFilter=(e)=>{
            console.log(e.target.value,e.target.name)
    }
  return (
    <div className='px-5 lg:px-20'>
        <section>
            <h3 className='text-gray-500 py-2 mt-10'>
                Home/India/Indian Fast food/3
            </h3>
            <div>
                <Grid container spacing={2}>
                    <Grid items xs={12}>
                        <img className='w-full h-[40vh] object-cover'
                         src="https://cdn.pixabay.com/photo/2016/02/10/13/35/hotel-1191718_1280.jpg" alt="" />
                    </Grid>
                    <Grid items xs={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover'
                         src="https://cdn.pixabay.com/photo/2019/02/21/19/00/restaurant-4011989_1280.jpg" alt="" />
                    </Grid>
                    <Grid items xs={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover'
                         src="https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150_1280.jpg" alt="" />
                    </Grid> 
                </Grid>
            </div>
            <div className='pt-3 pb-5'>
                <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
                <p className='text-gray-500 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem impedit temporibus itaque explicabo enim debitis voluptate ex. Quis accusamus, repellat asperiores dolores nihil ipsum fugit ratione sequi sapiente assumenda. Ea?</p>
                <div className='space-y-3 mt-3'>
                    <p className='text-gray-500 flex flex-item-center gap-3'>
                    <LocationOnIcon/>
                    <span>Mumbai maharashtra 
                    </span>
                </p>
                <p className='text-gray-500 flex flex-item-center gap-3'>
                    <CalendarTodayIcon />
                    <span>
                        data and time venue
                    </span>
                </p>
                </div>
                
            </div>
        </section>

        <Divider/>

        <section className='pt-[2rem] lg:flex relative'>

            <div className='space-y-10 lg:w-[20%] filter '>
                <div className='box space-y-5 lg:sticky top-28 '>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Type
                        </Typography>
                        <FormControl className='py-10 space-y-5'
                         component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                              {foodTypeOptions.map((item) => (
                                <FormControlLabel
                                  key={item.value}
                                  value={item.value}
                                  control={<Radio />}
                                  label={item.label}
                                />
                              ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Divider/>
                     <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Category
                        </Typography>
                        <FormControl className='py-10 space-y-5'
                         component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                              {categories.map((item) => (
                                <FormControlLabel
                                  key={item}
                                  value={item}
                                  control={<Radio />}
                                  label={item}
                                />
                              ))}
                            </RadioGroup>
                        </FormControl>
                    </div>

                </div>
            </div>
            <div className='space-y-10 lg:w-[80%] lg:pl-10'>
                {menu.map((item)=><MenuCard/>)}
            </div>

        </section>        
    </div>
  )
}
