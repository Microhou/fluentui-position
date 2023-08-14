import React from 'react';
import {
    Button,
    Popover,
    PopoverSurface,
    PopoverTrigger,
    PositioningProps,
  } from "@fluentui/react-components";
  import {  DismissSquareRegular } from "@fluentui/react-icons";
  

export const AnchorToTarget = () => {
    const [target, setTarget] = React.useState<HTMLElement | null>(null);

    return (
        <div style={{display: "flex", gap:10}}>
            <Popover positioning={{ position: "above", align: "start", target }}>
                <PopoverTrigger disableButtonEnhancement>
                    <Button appearance='primary'> Anchor to target</Button>
                </PopoverTrigger>

                <PopoverSurface style={{ minWidth: 100 }}>Container</PopoverSurface>
            </Popover>
            <Button ref={setTarget}>target </Button>
        </div>
    )
}

const OffsetFunction = () => {
    const offset: PositioningProps['offset'] = ({
        positionedRect,
        targetRect,
        position,
        alignment,
    }) => {
        return { crossAxis: 10, mainAxis: positionedRect.width / 2 };
    }

    return (
        <Popover positioning={{position: 'above', offset}}>
            <PopoverTrigger disableButtonEnhancement>
                <Button appearance='primary'>
                    Offset
                    <DismissSquareRegular />
                </Button>
            </PopoverTrigger>

            <PopoverSurface style={{ minWidth: 100 }}>Container</PopoverSurface>
        </Popover>
    )
}

export default OffsetFunction;