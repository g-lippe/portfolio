import { Fragment } from "react";
import Navbar from "../../components/navbar";
import { Card, Divider } from "@tremor/react";
import SectionAboutMe from "../../components/sectionAboutMe";


export default function HomePage() {
  return (
    <Fragment>

      <Navbar />


      <div className='flex justify-center p-1'>
        <div className="w-4/5  box-border p-4">

          <section>

            <div className='flex height-screen my-72'>

              <div className="p-5 border-2 rounded-xl border-light_transparent w-3/4">

                <p className="text-accent mb-6 font-mono ">Hi, my name is</p>

                <h1 className="text-7xl font-bold mb-3 text-primary">Name LastName</h1>
                <h1 className="text-7xl font-bold mb-6 text-primary opacity-70">I build things for the web.</h1>

                <p className="text-primary opacity-70 ">
                  Aenean posuere tincidunt risus, at consectetur turpis porttitor at. Quisque fringilla vestibulum tincidunt. Quisque congue odio sit amet arcu interdum, nec venenatis nisl fringilla.
                </p>



              </div>






            </div>

          </section>



          <SectionAboutMe />


        </div>
      </div>


    </Fragment>
  );
}