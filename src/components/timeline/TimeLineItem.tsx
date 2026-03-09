import { VerticalTimelineElement } from 'react-vertical-timeline-component';

export interface TimeLineItemProps {
  time: string;
  title: string;
  subtitle: string;
  description: string;
  logoSrc: string;
}
export const TimeLineItem = ({
  time,
  title,
  subtitle,
  description,
  logoSrc,
}: TimeLineItemProps) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#fff8df ', color: '#333' }}
      contentArrowStyle={{ borderRight: '7px solid  #fff8df ' }}
      date={time}
      dateClassName="text-magazine-white"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={
        <img
          src={logoSrc}
          alt={`${title} logo`}
          style={{ width: '100%', height: '100%' }}
          className="rounded-full"
        />
      }
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <p>{description}</p>
    </VerticalTimelineElement>
  );
};
