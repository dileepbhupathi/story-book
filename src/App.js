import './App.css';
import { CardComponent } from './components/CardComponent/CardComponent';
import { ImageCard } from './components/ImageCardComponent/ImageCard';
import { TitleComponent } from './components/TitleComponent/TitleComponent';

function App() {
  return (
    <div>
      <TitleComponent/>
      <ImageCard/>
      <CardComponent/>
    </div>
  );
}

export default App;
