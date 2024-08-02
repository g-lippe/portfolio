import { Card } from '@tremor/react';

export default function ProjSection({ title, items }) {

  console.log(items)

  return (
    <div className='my-8 '>
      <h3 className='text-5xl text-center font-bold my-4'>{title}</h3>

      <div className='grid grid-cols-3 gap-4'>
        {Object.keys(items).map((key) => (
          <Card className="min-h-60">
            <a href={items[key]['link']}>
              <p className="text-center text-slate-400">{items[key]['name']}</p>
            </a>
          </Card>
        ))}

      </div>


    </div>
  )
}