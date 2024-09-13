export default function StackList({stackList: string}) {

  const listItem = (string) => {
    return (<li className="mb-2 mx-auto select-none transition duration-1000 hover:text-accent hover:duration-200">{string}</li>)
  }

  return (
    <ul className="text-primary opacity-90 list-inside list-disc text-sm columns-2 w-2/5 ">
      {string.map(listItem)}
    </ul>
  )
}