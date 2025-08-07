import React from 'react'
import {Accordion,AccordionDetails, AccordionSummary, FormGroup}   from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'



const demo=[
    {category:"Nuts & seeds",
     ingredients:["Cashew"]   
    },
    {category:"Nuts & seeds",
     ingredients:["Protein,kdbuyd  "]   
    },
    {category:"Protien",
     ingredients:["Bacon strips,hbyue"]   
    }
]
export const MenuCard = () => {
    const handleCheckBoxChange = (value) => {
        console.log("value")
    }

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className='lg:flex items-center justify-between'>
                    <div className='lg:flex items-center lg:gap-5'>
                        <img className='w-[7rem] h-[7rem] object-cover'
                            src="" alt="" />
                    </div>
                    <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                        <p className='font-semibold text-xl'>Burger </p>
                        <p>₹ 499</p>
                        <p className='text-gray-400'>nice food  </p>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form>
                    <div className='flex gap-5 flex-wrap'>
                        {demo.map((item) => (
                            <div key={item.category}>
                                <p>{item.category}</p>
                                <FormGroup>
                                    {item.ingredients.map((ingredient) =>
                                        <FormControlLabel
                                            key={ingredient}
                                            control={
                                                <Checkbox onChange={() => handleCheckBoxChange(ingredient)} />
                                            }
                                            label={ingredient}
                                        />
                                    )}
                                </FormGroup>
                            </div>
                        ))}
                    </div>
                    <div className='pt-5'>
                        <Button variant="contained" disabled={false}
                            type="submit">{true ? "Add to cart" : "Out of Stock"}</Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    )
}
