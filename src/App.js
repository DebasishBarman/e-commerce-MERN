
import './App.css';
import TodoForm from './components/TodoForm';
import { Container } from 'react-bootstrap'

import Header from './components/Header';
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';
function App() {
  return (
    <>

      {/* <TodoForm /> */}
      <Header />
      <main className="py-3">
        <Container>
           <HomeScreen/>
        </Container>
      </main>


      <Footer />

    </>
  );
}
export default App;
