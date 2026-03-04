import { CarouselTec, MainTitle } from '../components';
import { TECHNOLOGIES } from '../constants';

function App() {
  return (
    <div className="background-container p-4">
      <div>
        <CarouselTec
          items={TECHNOLOGIES.map(tech => ({
            name: tech.name,
            icon: tech.icon,
          }))}
        ></CarouselTec>
        <div className="flex flex-row w-full items-center justify-evenly  mb-4">
          <MainTitle text="Hello, I'm Erick Dejo from Peru" />
          <MainTitle text="A front-end web/mobile developer" />
        </div>

        <p className="text-4xl text-magazine-white font-bold underline">
          Hello world!
        </p>
        <p className="text-4xl text-magazine-white font-bold underline font-orbitron">
          Hello world!
        </p>
      </div>
      <h1 className="text-3xl text-magazine-white font-bold underline">
        Vite + React
      </h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
