import MagnetLines from '../gsap/MagnetLines';

export const MagnetDeco = () => {
  return (
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
  );
};
