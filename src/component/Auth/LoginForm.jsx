import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'

const initialValues = {
  email: "",
  password: ""
}

export const LoginForm = () => {
  const navigate = useNavigate()

  const handleSubmit = (values) => {
    console.log("Login form submitted:", values)
  }

  return (
    <div>
      <Typography variant='h5' className='text-center'>
        Login
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
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
          <Button sx={{ mt: 2, padding: "1rem" }} fullWidth type='submit' variant='contained'>
            Login
          </Button>
        </Form>
      </Formik>

      <Typography variant='body2' align='center' sx={{ mt: 3 }}>
        Don't have an account?
        <Button size='small' onClick={() => navigate("/account/register")}>
          Register
        </Button>
      </Typography>
    </div>
  )
}
