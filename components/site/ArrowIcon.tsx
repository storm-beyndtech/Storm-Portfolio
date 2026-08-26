import { FiArrowDown, FiArrowRight, FiArrowUpRight } from "react-icons/fi"

type ArrowIconProps = {
  direction?: "up-right" | "right" | "down"
}

export default function ArrowIcon({ direction = "up-right" }: ArrowIconProps) {
  const Icon = direction === "down" ? FiArrowDown : direction === "right" ? FiArrowRight : FiArrowUpRight

  return <Icon className="action-icon" aria-hidden="true" focusable="false" />
}
