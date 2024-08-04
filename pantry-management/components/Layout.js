import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
