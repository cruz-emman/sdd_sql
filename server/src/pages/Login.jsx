import { Box, Button, getToolbarUtilityClass, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser } from '../redux/apiCalls'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { resetState } from '../redux/adminSlice'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {admin, isFetching, isError, isSuccess} = useSelector((state) => state.admin)


  const [userAdmin, setAdmin] = useState({
    admin_user: '',
    admin_password: ''
  })
  

  const handleLogin = async (e) =>{
    e.preventDefault()
    try {
      await LoginUser(userAdmin, dispatch)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{
    if(isError){
      toast.error("Incorrect Username or Password")
    }
    dispatch(resetState())
  },[dispatch, isError])

  useEffect(() =>{
    if(admin){
      toast.success("Login Successful")
      navigate('/')
    }
  },[dispatch, admin])

  const handleChange = (e) =>{
    setAdmin((prev) => ({...prev, [e.target.name]:e.target.value}))
  }

  return (
    <Box sx={{height: '100vh', width: '100vw', display:'flex', alignItems:'flex-start', justifyContent:'center'}}>
      <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', width:'80%', flexDirection:'column',p:4, gap: 5}}>
        <form action="" onSubmit={handleLogin}>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:2}}>
          <Box component="img" src={Logo} />
          <Typography sx={{fontWeight: 'light'}} variant="h2">Sex-Dissagrated System</Typography>
          <Typography sx={{fontWeight: 700}} variant="h5">Philippine Public Safety College</Typography>
        </Box>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', width: '100%', gap: 3}}>
          <TextField fullWidth required label="Username" name="admin_user" onChange={handleChange} type="text" variant="outlined" />
          <TextField fullWidth required label="Username" name="admin_password" onChange={handleChange} type="password" variant="outlined" />
          <Button type="submit" size="large" color='success' fullWidth variant="outlined">Login</Button>
        </Box>
        </form>
      </Box>
    </Box>
  )
}

export default Login