import { ImMan } from 'react-icons/im';
import {
  CarouselTec,
  MainTitle,
  ScrollVelocity,
  AnimatedTecStatistics,
  Portrait,
  InformationBox,
  LogoLoop,
} from '../components';
import {
  TECHNOLOGIES_1,
  TECHNOLOGIES_2,
  TECHNOLOGIES_EXPERIENCE,
} from '../constants';
import { TbClockHour7Filled } from 'react-icons/tb';
import DecryptedText from '../components/gsap/DecryptedText';
import MagnetLines from '../components/gsap/MagnetLines';
import {
  FaGithub,
  FaGoodreads,
  FaLetterboxd,
  FaLinkedin,
} from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import Cubes from '../components/gsap/Cubes';

function App() {
  const techLogos = [
    {
      node: <FaLetterboxd />,
      title: 'Letterboxd',
      href: 'https://letterboxd.com/CondeDeLosMango/',
    },
    {
      node: <FaGithub />,
      title: 'Github',
      href: 'https://github.com/gatodemontecristo',
    },
    {
      node: <FaLinkedin />,
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/erick-dejo-vicente-b819601b6/',
    },
    {
      node: <SiLeetcode />,
      title: 'LeetCode',
      href: 'https://leetcode.com/u/gatodemontecristo/',
    },
    {
      node: <FaGoodreads />,
      title: 'Goodreads',
      href: 'https://www.goodreads.com/user/show/194773351-erick-dejo',
    },
  ];
  return (
    <div className="background-container p-4">
      <div>
        <CarouselTec
          items={TECHNOLOGIES_1.map(tech => ({
            name: tech.name,
            icon: tech.icon,
          }))}
        ></CarouselTec>

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
          <Portrait></Portrait>
          <div className="flex flex-col w-1/2 text-magazine-white">
            <div className="flex flex-row  w-full">
              <InformationBox
                label="Age"
                type="info"
                icon={<ImMan></ImMan>}
              ></InformationBox>
              <InformationBox label="29" type="info"></InformationBox>
              <InformationBox
                label="Hour"
                type="info"
                icon={<TbClockHour7Filled></TbClockHour7Filled>}
              ></InformationBox>
              <InformationBox type="clock"></InformationBox>
            </div>
            <div className="flex flex-row  w-full">
              <div className="w-full flex flex-row items-center justify-center border-r-2 border-b-2  gap-4 font-bold text-4xl border-magazine-gray text-magazine-gray bg-magazine-dark p-8">
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

            <AnimatedTecStatistics
              technologies={TECHNOLOGIES_EXPERIENCE.flatMap(tech => [
                tech.pair1,
                ...(tech.pair2 ? [tech.pair2] : []),
              ])}
              staggerDelay={0.3}
            />
          </div>
        </div>
      </div>

      <div className="w-full text-magazine-gray my-10">
        <ScrollVelocity
          texts={['Web applications SPA/SSR', 'Mobile applications']}
          velocity={100}
          className="custom-scroll-text"
        />
      </div>

      <div className="flex flex-col border-2 border-magazine-magazine bg-magazine-dark text-magazine-gray rounded-lg mb-4">
        <div className={`overflow-hidden flex flex-row border-b-2`}>
          <div className="flex flex-col p-4 w-1/4 border-r-2 border-magazine-gray">
            <MagnetLines
              rows={10}
              columns={10}
              containerSize="20vmin"
              lineColor="#fff8df"
              lineWidth="2px"
              lineHeight="10px"
              baseAngle={0}
              style={{ margin: '0rem auto' }}
            />{' '}
          </div>
          <div className="flex flex-col justify-center items-center w-3/4 p-4 gap-4">
            <p className="text-xl">My social networks</p>
            <div className="relative w-full">
              <LogoLoop
                logos={techLogos}
                speed={100}
                direction="left"
                logoHeight={60}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                fadeOut={false}
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
              />
            </div>
          </div>
        </div>
        <div className={`overflow-hidden flex flex-row `}>
          <div className="flex flex-row justify-center items-center w-3/4 bg-magazine-gray gap-4 border-e-2 border-magazine-gray">
            <div className="flex flex-row justify-center items-center gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-xl text-magazine-dark">
                  This is my resume, let's stay in touch!
                </p>
                <button className="bg-magazine-dark py-2 cursor-pointer hover:bg-[#474747]">
                  Download Resume
                </button>
              </div>
              <div className="w-25 flex flex-col">
                <img src="./cartoon.png" alt="Erick cartoon 60's" />
              </div>
            </div>
          </div>
          <div className="flex flex-col relative  h-50  w-1/4 bg-magazine-dark  border-e-2 border-magazine-gray">
            <div className="absolute top-10 left-1/3">
              <Cubes
                gridSize={8}
                maxAngle={45}
                radius={3}
                borderStyle="1px solid #fff8df"
                faceColor="#333"
                rippleColor="#333"
                rippleSpeed={1.5}
                autoAnimate
                rippleOnClick
                cellGap={8}
                cubeSize={10}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
