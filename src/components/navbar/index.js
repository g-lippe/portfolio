import { useLocation } from "react-router-dom";
import { RiArrowLeftLine } from "@remixicon/react";
import { Icon } from "@tremor/react";

export default function Navbar() {

  const location = useLocation()
  const is_homepage = location.pathname === "/" ? true : false

  return (
    <div className="border-b-2 border-light_transparent bg-main_bg_dark  p-3 sticky top-0 z-40">

      {is_homepage && (
        <h1 className="text-3xl font-bold">Portfolio</h1>
      )}

      {!is_homepage && (
        <a href="/">
          <Icon
            icon={RiArrowLeftLine}
            variant="simple"
            size="lg"
            tooltip="Back to Main Page"
            color="grey"
          />
        </a>

      )}
    </div>
  )
}   