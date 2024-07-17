import { IconProps } from '@/svg/IconType';

export default function ArrowUpIcon({ fill, ...styleProps }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...styleProps}
    >
      <path
        d="M17.2929 15.7071C17.6834 16.0976 18.3166 16.0976 18.7071 15.7071C19.0976 15.3166 19.0976 14.6834 18.7071 14.2929L17.2929 15.7071ZM12 9L12.7071 8.29289C12.3166 7.90237 11.6834 7.90237 11.2929 8.29289L12 9ZM5.29289 14.2929C4.90237 14.6834 4.90237 15.3166 5.29289 15.7071C5.68342 16.0976 6.31658 16.0976 6.70711 15.7071L5.29289 14.2929ZM18.7071 14.2929L12.7071 8.29289L11.2929 9.70711L17.2929 15.7071L18.7071 14.2929ZM11.2929 8.29289L5.29289 14.2929L6.70711 15.7071L12.7071 9.70711L11.2929 8.29289Z"
        fill={fill || '#9DA7AE'}
      ></path>
    </svg>
  );
}
