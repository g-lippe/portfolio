import { Fragment } from "react";
import { Card, LineChart, ProgressCircle } from '@tremor/react';
import Navbar from "../../components/navbar";
import ProjSection from "../../components/proj-section";

const react_projects = ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'];

const chartdata = [
  {
    date: 'Jan 22',
    Profit: 2890,
    Costs: 2338,
  },
  {
    date: 'Feb 22',
    Profit: 2756,
    Costs: 2103,
  },
  {
    date: 'Mar 22',
    Profit: 3322,
    Costs: 2194,
  },
  {
    date: 'Apr 22',
    Profit: 3470,
    Costs: 2108,
  },
  {
    date: 'May 22',
    Profit: 3475,
    Costs: 1812,
  },
  {
    date: 'Jun 22',
    Profit: 3129,
    Costs: 1726,
  },
  {
    date: 'Jul 22',
    Profit: 3490,
    Costs: 1982,
  },
  {
    date: 'Aug 22',
    Profit: 2903,
    Costs: 2012,
  },
  {
    date: 'Sep 22',
    Profit: 2643,
    Costs: 2342,
  },
  {
    date: 'Oct 22',
    Profit: 2837,
    Costs: 2473,
  },
  {
    date: 'Nov 22',
    Profit: 2954,
    Costs: 3848,
  },
  {
    date: 'Dec 22',
    Profit: 3239,
    Costs: 3736,
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
              <Card className="mx-auto max-w-sm">
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

              <Card className="mx-auto max-w-sm">
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