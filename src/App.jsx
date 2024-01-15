import MainContent from './components/mainContent';
import Sidebar from './components/sidebar';

import './styles/components/app.sass';

function App() {
  return (
    <>
      <div id="portifolio">
        <h1>Aylton Moura Junior</h1>
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
