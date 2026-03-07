import { ImMan } from 'react-icons/im';
import {
  CarouselTec,
  LiveClockPeru,
  MainTitle,
  ScrollVelocity,
  TecStatistic,
} from '../components';
import {
  TECHNOLOGIES_1,
  TECHNOLOGIES_2,
  TECHNOLOGIES_EXPERIENCE,
} from '../constants';
import { TbClockHour7Filled } from 'react-icons/tb';
import { nanoid } from 'nanoid';
import DecryptedText from '../components/gsap/DecryptedText';

function App() {
  return (
    <div className="background-container p-4">
      <div>
        <CarouselTec
          items={TECHNOLOGIES_1.map(tech => ({
            name: tech.name,
            icon: tech.icon,
          }))}
        ></CarouselTec>
        <ScrollVelocity
          texts={['React Bits', 'Scroll Down']}
          velocity={100}
          className="custom-scroll-text"
        />
        <div className="flex flex-row w-full h-67.5 items-center justify-evenly mb-10">
          <MainTitle text="Hello, I'm Erick Dejo from Peru" />
          <MainTitle text="A front-end web/mobile developer" />
        </div>
        <CarouselTec
          items={TECHNOLOGIES_2.map(tech => ({
            name: tech.name,
            icon: tech.icon,
          }))}
          reverse
        ></CarouselTec>

        <div className="flex flex-row border-2 border-magazine-gray rounded-lg overflow-hidden">
          <div className="w-1/2  bg-[url('./photo-erick.jpeg')] bg-cover bg-center"></div>
          <div className="flex flex-col w-1/2 text-magazine-white">
            <div className="flex flex-row  w-full">
              <div className="w-1/4 flex flex-row items-center justify-center border-r-2 border-b-2  gap-4 font-semibold text-2xl border-magazine-gray bg-magazine-dark p-4">
                <DecryptedText
                  text="Age"
                  speed={120}
                  animateOn="both"
                  revealDirection="start"
                  sequential
                  useOriginalCharsOnly={false}
                />
                <ImMan></ImMan>
              </div>
              <div className="w-1/4 flex flex-row items-center justify-center border-r-2 border-b-2 gap-4 font-semibold text-2xl border-magazine-gray bg-magazine-dark p-4">
                <DecryptedText
                  text="29"
                  speed={120}
                  animateOn="both"
                  revealDirection="start"
                  sequential
                  useOriginalCharsOnly={false}
                />
              </div>
              <div className="w-1/4 flex flex-row items-center justify-center border-r-2 border-b-2 gap-4 font-semibold text-2xl border-magazine-gray bg-magazine-dark p-4">
                <DecryptedText
                  text="Hour"
                  speed={120}
                  animateOn="both"
                  revealDirection="start"
                  sequential
                  useOriginalCharsOnly={false}
                />
                <TbClockHour7Filled></TbClockHour7Filled>
              </div>
              <div className="w-1/4 flex flex-row items-center justify-center border-r-2 border-b-2 gap-4 font-semibold text-2xl border-magazine-gray bg-magazine-dark p-4">
                <LiveClockPeru />
              </div>
            </div>
            <div className="flex flex-row  w-full">
              <div className="w-full flex flex-row items-center justify-center border-r-2 border-b-2  gap-4 font-bold text-4xl border-magazine-gray bg-magazine-dark p-8">
                <DecryptedText
                  text="Work experience 7 years"
                  speed={120}
                  animateOn="both"
                  revealDirection="start"
                  sequential
                  useOriginalCharsOnly={false}
                />
              </div>
            </div>

            {TECHNOLOGIES_EXPERIENCE.map(tech => (
              <div className="flex flex-row  w-full" key={nanoid()}>
                <TecStatistic {...tech.pair1}></TecStatistic>
                {tech.pair2 && <TecStatistic {...tech.pair2}></TecStatistic>}
              </div>
            ))}
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
