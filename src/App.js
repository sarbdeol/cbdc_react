import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { IntlProvider } from 'react-intl';
import { Backdrop, CircularProgress } from '@mui/material';
import Login from './views/auth/Login';
import AppRoute from './routes/AppRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import { retrieveItem } from './utils/localStorage';
import { setGlobalState, useGlobalState } from './state';
import { getLang } from './utils/intl';

const THEME = createTheme({
  typography: {
    fontFamily: `'Lato', sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  textField: {
    border: 'none',
  },
});

const App = () => {
  const [loading] = useGlobalState('loading');

  useEffect(() => {
    const addressBook = retrieveItem('addressBook');
    setGlobalState('addressBook', addressBook ? addressBook : []);
    setGlobalState('loading', false);  // Stop loading once initialized
  }, []);

  return (
    <IntlProvider locale={getLang()} defaultLocale="en">
      <ThemeProvider theme={THEME}>
        <Router>
          {loading ? (
            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={loading}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          ) : null}

          <Routes>
            <Route path="/login" element={<Login />} />
            {/* ProtectedRoute will handle authentication */}
            <Route path="/*" element={<ProtectedRoute component={AppRoute} />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
