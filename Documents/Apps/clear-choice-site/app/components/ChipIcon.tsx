// components/ChipIcon.tsx
import { FC } from 'react'
import { IconProps } from 'react-feather'

interface ChipIconProps {
  as: FC<IconProps>
  size?: number
  rotate?: number      // degrees
  nudgeY?: number      // px, negative = up
  nudgeX?: number      // px, negative = left
  className?: string   // optional extra classes for the chip
}

export default function ChipIcon({
  as: IconComp,
  size = 22,
  rotate = 0,
  nudgeY = 0,
  nudgeX = 0,
  className = '',
}: ChipIconProps) {
  return (
    <span
      className={
        // Matches your brand chip style used elsewhere
        `inline-flex items-center justify-center w-10 h-10 rounded-lg
         bg-[#ff4f00]/10 text-[#ff4f00] leading-none ${className}`
      }
      style={{ lineHeight: 0 }} // no inline baseline
    >
      <IconComp
        size={size}
        className="block" // important: no inline baseline for the svg
        style={{
          transform: `rotate(${rotate}deg) translate(${nudgeX}px, ${nudgeY}px)`,
          transformOrigin: '50% 50%',
        }}
      />
    </span>
  )
}