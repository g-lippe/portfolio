import { Fragment } from "react";
import { Card, LineChart, ProgressCircle } from '@tremor/react';
import Navbar from "../../components/navbar";
import ProjSection from "../../components/proj-section";

const react_projects = [
  { name: 'Support Tickets', link: '/pages/dashboards/support' },
  { name: 'Board Ambulance', link: '/pages/dashboards/Board_Ambulance' },
  { name: 'Project 3', link: '#' },
  { name: 'Project 4', link: '#' },
  { name: 'Project 5', link: '#' },
];

const chartdata = [
  {
    date: 'Jan 22',
    Costs: 3250,
    Profit: 1950,
  },
  {
    date: 'Feb 22',
    Costs: 2820,
    Profit: 2103,
  },
  {
    date: 'Mar 22',
    Costs: 3322,
    Profit: 2560,
  },
  {
    date: 'Apr 22',
    Costs: 3470,
    Profit: 2108,
  },
  {
    date: 'May 22',
    Costs: 3475,
    Profit: 2743,
  },
  {
    date: 'Jun 22',
    Costs: 3129,
    Profit: 3000,
  },
  {
    date: 'Jul 22',
    Costs: 3490,
    Profit: 2743,
  },
  {
    date: 'Aug 22',
    Costs: 2903,
    Profit: 2980,
  },
  {
    date: 'Sep 22',
    Costs: 2643,
    Profit: 3005,
  },
  {
    date: 'Oct 22',
    Costs: 2837,
    Profit: 3250,
  },
  {
    date: 'Nov 22',
    Costs: 2954,
    Profit: 3848,
  },
  {
    date: 'Dec 22',
    Costs: 3239,
    Profit: 3736,
  },
];


const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`

export default function HomePage() {
  return (
    <Fragment>
      <Navbar />

      <div className='flex items-center justify-center p-1'>
        <div className="w-3/4 p-4">

          <div className='flex '>
            <p className='w-1/3 text-6xl'>
              Visualize Your <br/>
              Data & Business <br/>
              in real time
            </p>


            <div className='w-1/3 flex flex-col gap-2'>
              <Card className="ms-auto me-3 max-w-sm">
                <div className="flex justify-start space-x-5 items-center">
                  <ProgressCircle value={75} size="lg">
                    <span className="text-xs font-medium text-slate-700">75%</span>
                  </ProgressCircle>
                  <div>
                    <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                      $340/$450 (75%)
                    </p>
                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                      Spend management control
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="ms-auto me-3 max-w-sm">
                <div className="flex justify-start space-x-5 items-center">
                  <ProgressCircle value={36} size="lg">
                    <span className="text-xs font-medium text-slate-700">36%</span>
                  </ProgressCircle>
                  <div>
                    <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                      $340/$450 (75%)
                    </p>
                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                      Spend management control
                    </p>
                  </div>
                </div>
              </Card>

            </div>

            <div className='w-1/3'>
              <LineChart
                className="h-80"
                data={chartdata}
                index="date"
                categories={['Profit', 'Costs']}
                colors={['indigo', 'rose']}
                valueFormatter={dataFormatter}
                yAxisWidth={60}
                onValueChange={(v) => console.log(v)}
              />

            </div>
          </div>


          <ProjSection title='React Projects' items={react_projects} />
          <ProjSection title='Other Projects' items={react_projects} />

        </div>
      </div>
    </Fragment>
  );
}