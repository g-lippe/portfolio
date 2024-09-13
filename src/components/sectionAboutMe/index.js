import StackList from "../stackList";


export default function SectionAboutMe() {
  return (

    <section>
      <div className="p-5 border-1 rounded-xl border-light_transparent w-3/4">

        <span className="text-xl text-accent mb-6 font-mono">01.</span>
        <span className="text-2xl font-bold mb-3 text-primary ms-2">About me</span>

        <div className="w-2/3">
          <p className="text-primary opacity-70 mb-2 ">
            Pellentesque accumsan amori mollis. Suspendisse mattis ante non augue tincidunt bibendum. Sed ornare erat ac eros condimentum ullamcorper.
            Proin ullamcorper lacus a tristique varius. Curabitur molestie venenatis est vitae ullamcorper.
            Integer sit amet quam et orci tempor imperdiet. Cras quis nunc id nulla fermentum varius interdum eu sem.
          </p>
          <p className="text-primary opacity-70 mb-2 ">
            Suspendisse mattis ante non augue tincidunt bibendum. Sed ornare erat ac eros condimentum ullamcorper.
            Proin ullamcorper lacus a tristique varius. Curabitur molestie venenatis est vitae ullamcorper.
            Integer sit amet quam et orci tempor imperdiet. Cras quis nunc id nulla fermentum varius interdum eu sem.
          </p>

          <p className="text-primary opacity-70 mb-2 ">
            Here are a few technologies I’ve been working with recently:
          </p>
        </div>

        <StackList stackList={["JavaScript (ES6+)", "React", "Node.js", "Express", "Oracle SQL"]} />
    
      </div>

    </section>

  )
}