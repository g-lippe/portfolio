import { RiFlag2Line } from '@remixicon/react';
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';



export default function CustomTable({ data, headers, fields, title, zebra, classes }) {
  return (
    <Card className={"flex flex-col items-stretch " + classes}>
      <div>
        <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{title}</h3>
      </div>
      <Table className="mt-5 overflow-auto">
        <TableHead className="sticky top-0 bg-[#ffffffe6] ">
          <TableRow>
            {headers.map((header) => (
              <TableHeaderCell key={header}>{header}</TableHeaderCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item[fields[0]]} className={`hover:bg-slate-100 ${zebra ? 'even:bg-slate-50' : ''}`}>
              {fields.map((field) => (
                <TableCell key={`${item}-${field}`} className=''>{item[field]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>


  )
}