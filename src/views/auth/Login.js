import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, Typography, TextField } from '@mui/material';

// import elements
import Button from '../../components/elements/Button';
import Image from '../../components/elements/Image';
// import Logo from '../assets/images/norgesLogo.png';
// import Background from '../assets/images/background.png';

const sectionStyle = {
    height: '100vh',
    // backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: '#F2F8FA',
};

const inputProps = {
    backgroundColor: '#F2F8FA',
    borderBottom: '0px',
    height: '20px',
};

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Handle form submission
    const handleLogin = (e) => {
        e.preventDefault();

        // Mock authentication (replace this with real API request in production)
        if (username === 'admin' && password === 'password') {
            localStorage.setItem('isAuthenticated', 'true');  // Store login state
            navigate('/dashboard');  // Redirect to dashboard on successful login
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <Box style={sectionStyle}>
            <Image
                // src={Logo}
                width='200px'
                component={Link}
                to='/'
                style={{ position: 'relative', top: '30%', margin: '0 auto' }}
            />
            <Card
                sx={{ maxWidth: 350, p: 1, mt: 3, boxShadow: 0, borderRadius: 0 }}
                style={{ position: 'relative', top: '33%', margin: '0 auto' }}
            >
                <CardContent>
                    <Typography variant='h6' sx={{ fontSize: 18, textAlign: 'center' }} gutterBottom>
                        LOGIN
                    </Typography>
                    <Box
                        component='form'
                        sx={{
                            '& .MuiTextField-root': { mb: 3, width: '100%' },
                        }}
                        noValidate
                        autoComplete='off'
                        onSubmit={handleLogin}  // Form submit handler
                    >
                        <TextField
                            required
                            id='outlined-size-small'
                            label='Username'
                            variant='filled'
                            size='small'
                            value={username}  // Bind input value to state
                            onChange={(e) => setUsername(e.target.value)}  // Update state on input change
                            inputProps={{ style: inputProps }}
                            InputLabelProps={{ style: { fontSize: '14px' } }}
                        />
                        <TextField
                            required
                            id='outlined-required'
                            label='Password'
                            variant='filled'
                            type="password"  // Hide password input
                            size='small'
                            value={password}  // Bind input value to state
                            onChange={(e) => setPassword(e.target.value)}  // Update state on input change
                            inputProps={{ style: inputProps }}
                            InputLabelProps={{ style: { fontSize: '14px' } }}
                        />

                        <Button type='submit' className='button button-primary button-wide-mobile' wide>
                            LOGIN
                        </Button>
                        {error && (
                            <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                                {error}
                            </Typography>
                        )}
                        <Typography
                            component={Link}
                            to='/forgot-password'
                            className='primary-color'
                            variant='p'
                            sx={{ mb: 1.5, mt: 3, fontSize: 14, fontWeight: 'bold' }}
                            color='text.secondary'
                        >
                            Forgot password
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Login;
