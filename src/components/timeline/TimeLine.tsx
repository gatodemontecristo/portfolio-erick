import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { TimeLineItem, type TimeLineItemProps } from './TimeLineItem';
import { nanoid } from 'nanoid';
import TextType from '../gsap/TextType';

interface TimeLineProps {
  items: TimeLineItemProps[];
  title: string;
  className?: string;
}
export const TimeLine = ({ items, className, title }: TimeLineProps) => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-12 mt-10">
      <TextType
        text={[title]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter="▎"
        deletingSpeed={50}
        variableSpeed={{ min: 60, max: 120 }}
        cursorBlinkDuration={0.5}
        loop={false}
        className="text-magazine-gray text-6xl font-extrabold text-start"
      />
      <VerticalTimeline className={` ${className}`}>
        {items.map(item => (
          <TimeLineItem key={nanoid()} {...item} />
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: '#fff8df', color: '#fff' }}
          icon={
            <img
              src="./icon-erick.png"
              alt="Erick's logo"
              style={{ width: '100%', height: '100%' }}
              className="rounded-full"
            />
          }
        />
      </VerticalTimeline>
    </div>
  );
};
