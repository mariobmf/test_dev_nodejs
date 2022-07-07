import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import Modal from 'react-modal';
import Home from './pages/Home';
import { queryClient } from './services/queryClient';
import GlobalStyle from './styles/global';

Modal.setAppElement('#root');

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Home />
      <ToastContainer />
    </QueryClientProvider>
  )
}

export default App
