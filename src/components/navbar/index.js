import { useLocation } from "react-router-dom";

export default function Navbar() {

  const location = useLocation()
  const is_homepage = location.pathname === "/" ? true : false

  return (
    <div className="border-b-2 bg-bg_light p-3 sticky top-0 z-40">
      {is_homepage && ( 
        <h1 className="text-3xl font-bold">Portfolio</h1>
      )}
      {!is_homepage && ( 
        <h1 className="text-3xl font-bold">--</h1>
      )}
    </div>
  )
}   