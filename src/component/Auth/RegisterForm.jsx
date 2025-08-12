import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import { Button, TextField, Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER"
}

export default function RegisterForm() {
  const navigate = useNavigate()

  const handleSubmit = (values) => {
    console.log("Register form submitted:", values)
  }
  const handleChnage=()=>{}

  return (
    <div>
      <Typography variant='h5'  className='text-center'>
        Register
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="fullName"
            label="Full Name"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          
             
            <Field
            as={Select}
            labelId='role-simple-select-label'
            id='role-simple-select'
            fullWidth margin='normal'
            name='role'
            //value={age}
            //label="Role"
            
            >
                <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>

            </Field>
          
           
         
          <Button sx={{ mt: 2, padding: "1rem" }} fullWidth type='submit' variant='contained'>
            Register
          </Button>
        </Form>
      </Formik>

      <Typography variant='body2' align='center' sx={{ mt: 3 }}>
        Already have an account?
        <Button size='small' onClick={() => navigate("/account/login")}>
          Login
        </Button>
      </Typography>
    </div>
  )
}
