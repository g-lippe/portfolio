import StackList from "../stackList";


export default function SectionAboutMe() {
  return (

    <section className="mb-40 w-3/4">

      <span className="text-xl text-accent mb-6 font-mono">01.</span>
      <span className="text-2xl font-bold mb-3 text-primary ms-2">About me</span>

      <div className="p-3 w-2/3 text-primary opacity-70">
        <p className="mb-2">
          Pellentesque accumsan amori mollis. Suspendisse mattis ante non augue tincidunt bibendum. Sed ornare erat ac eros condimentum ullamcorper.
          Proin ullamcorper lacus a tristique varius. Curabitur molestie venenatis est vitae ullamcorper.
          Integer sit amet quam et orci tempor imperdiet. Cras quis nunc id nulla fermentum varius interdum eu sem.
        </p>
        <p className="mb-2">
          Suspendisse mattis ante non augue tincidunt bibendum. Sed ornare erat ac eros condimentum ullamcorper.
          Proin ullamcorper lacus a tristique varius. Curabitur molestie venenatis est vitae ullamcorper.
          Integer sit amet quam et orci tempor imperdiet. Cras quis nunc id nulla fermentum varius interdum eu sem.
        </p>

      </div>
      <div className="ps-3">
        <p className="mb-2 text-primary opacity-70">
          Here are a few technologies I’ve been working with recently:
        </p>
        <StackList stackList={["JavaScript (ES6+)", "React", "Node.js", "Express", "Oracle SQL"]} />
      </div>



    </section>

  )
}