import Cubes from '../gsap/Cubes';

export const CubesDeco = () => {
  return (
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
  );
};
