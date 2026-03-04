import { IoLogoJavascript } from 'react-icons/io5';
import { CarouselTec } from '../components';

function App() {
  return (
    <div className="background-container p-4">
      <div>
        <CarouselTec
          items={[{ icon: IoLogoJavascript, name: 'Javascript' }]}
        ></CarouselTec>
        <div className="flex flex-row w-full items-center justify-evenly gap-2 mb-4">
          <div className="w-[40%]">
            <p className="text-magazine-gray text-7xl font-extrabold">
              Hello, I'm Erick Dejo from Peru
            </p>
          </div>
          <div className="w-[40%]">
            <p className="text-magazine-gray text-6xl font-extrabold">
              A front-end web/mobile developer
            </p>
          </div>
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
