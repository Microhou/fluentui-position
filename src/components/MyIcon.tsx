import { FluentIconsProps, bundleIcon, wrapIcon } from '@fluentui/react-icons';

export const MyOutlineIcon = wrapIcon((props: FluentIconsProps) => {
  return (
    <svg height="1rem" width="1rem" role="presentation" focusable="false" viewBox="2 2 16 16" {...props}>
      <g>
        <path d="..." />
      </g>
    </svg>
  );
}, 'MyOutlineIcon');

export const MyFilledIcon = wrapIcon((props: FluentIconsProps) => {
  return (
    <svg  height="1rem" width="1rem" role="presentation" focusable="false" viewBox="2 2 16 16" {...props as React.SVGAttributes<SVGElement>}>
      <g>
        <path d="..." />
      </g>
    </svg>
  );
}, 'MyFilledIcon');

export const MyIcon = bundleIcon(MyFilledIcon, MyOutlineIcon);

interface A  {
  a:string,
  b:number
}

type FluentIconsProps = (React.SVGAttributes<SVGElement> | React.HTMLAttributes<HTMLElement>) & React.RefAttributes<HTMLElement> & {
  primaryFill?: string;
  className?: string;
  filled?: boolean;
  title?: string;
};
type B = string|number;
type D = "h1"|number;
interface C {
  d: string|number
}

type E = B & D;
type F = B & A;
