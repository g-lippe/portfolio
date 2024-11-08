import HoverLink from "../hoverLink";
import StackList from "../stackList";

const workplace = ({ role, place, link, period, activities }) => {

  return (

    <div className="mb-10 my-4">
      <h3>
        <span className="text-primary font-bold"> {role} </span>
        <span className="text-primary font-bold"> &nbsp;-&nbsp;
          <HoverLink text={place} link={link} color="accent" />
        </span>
        <div className="text-sm mb-2 text-primary opacity-60 font-mono"> {period} </div>
      </h3>
      <ul role="list" className="marker:text-accent list-disc pl-5 space-y-3 text-primary opacity-80 ">

        {activities && activities.map(activity => (

          <li >{activity}</li>
        ))}

      </ul>
    </div>


  )
}

const workplaces = [
  {
    role: 'Analista de Sistemas ',
    place: 'Hospital São Vicente de Paulo',
    link: 'https://hsvicente.org.br/',
    period: 'Fev 2023 - Present',
    activities: ['Desenvolvimento em ReactJS focado em Dashboards e Relatórios Hospitalares , utilizando Typescript e OracleSQL',
      'Criação de views , consultas e stored procedures em bancos de dados',
      'Documentação e manutenção de código com o Github']
  },
  {
    role: 'Assistente de Suporte ',
    place: 'Hospital São Vicente de Paulo',
    link: 'https://hsvicente.org.br/',
    period: 'Aug 2019 - Fev 2023',
    activities: ['Help-Desk, manutenção do Sistema Soul MV', 'Estruturação de Redes', 'Configuração de Switches e Firewalls']
  },
  {
    role: 'Designer & Gerente da Comunidade',
    place: 'Data Realms',
    link: 'https://www.datarealms.com/',
    period: 'Jun 2016 - May 2019',
    activities: ['Game Development', 'Character and Level Design', 'Lua Programming']
  },
]


export default function SectionWhereWorked() {
  return (


    <section className="mb-40  w-3/4">

      <span className="text-xl text-accent mb-6 font-mono">02.</span>
      <span className="text-2xl font-bold text-primary ms-2">Onde Trabalhei</span>

      <div className="ps-3 w-2/3">
        {workplaces.map(workplace)}
      </div>



    </section>

  )
}