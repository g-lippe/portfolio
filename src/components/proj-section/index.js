import { Card } from '@tremor/react';

export default function ProjSection({ title, items }) {
  return (
    <div className='my-8 '>
      <h3 className='text-5xl text-center font-bold my-4'>{title}</h3>

      <div className='grid grid-cols-3 gap-4'>
        {items.map((item) => (
          <Card className="min-h-60" decorationColor="indigo"
    >
            <p className="text-center text-slate-400">{item}</p>
          </Card>

        ))}


      </div>


    </div>
  )
}