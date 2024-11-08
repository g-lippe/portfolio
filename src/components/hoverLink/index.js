

export default function HoverLink({ text, link, color }) {

  return (

    <a className={`group text-${color} transition-all duration-300 ease-in-out`} href={link}>
      <span className={`bg-left-bottom bg-gradient-to-r from-${color} to-${color} bg-[length:0%_0.7px] bg-no-repeat group-hover:bg-[length:100%_0.7px] transition-all duration-300 ease-out`}>
        {text}
      </span>
    </a>

  )
}