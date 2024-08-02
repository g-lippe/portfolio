import { Fragment } from "react";
import Navbar from "../../../components/navbar";
import support_data from "../../../data/mock_support_data.json";

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
import CustomTable from "../../../components/customTable";

const data = [
  {
    name: 'Viola Amherd',
    role: 'Federal Councillor',
    departement:
      'The Federal Department of Defence, Civil Protection and Sport (DDPS)',
    status: 'active',
  },
  {
    name: 'Albert Rösti',
    role: 'Federal Councillor',
    departement:
      'The Federal Department of the Environment, Transport, Energy and Communications (DETEC)',
    status: 'active',
  },
  {
    name: 'Beat Jans',
    role: 'Federal Councillor',
    departement: 'The Federal Department of Justice and Police (FDJP)',
    status: 'active',
  },
  {
    name: 'Ignazio Cassis',
    role: 'Federal Councillor',
    departement: 'The Federal Department of Foreign Affairs (FDFA)',
    status: 'active',
  },
  {
    name: 'Karin Keller-Sutter',
    role: 'Federal Councillor',
    departement: 'The Federal Department of Finance (FDF)',
    status: 'active',
  },
  {
    name: 'Guy Parmelin',
    role: 'Federal Councillor',
    departement:
      'The Federal Department of Economic Affairs, Education and Research (EAER)',
    status: 'active',
  },
  {
    name: 'Elisabeth Baume-Schneider',
    role: 'Federal Councillor',
    departement: 'The Federal Department of Home Affairs (FDHA)',
    status: 'active',
  },
];

const table_headers = [
  'Name',
  'Position',
  'Department',
  'Status',
]

const table_fields = [
  'name',
  'role',
  'departement',
  'status',
]

const table_headers_support = [
  'ID',
  'Department',
  'Phone',
  'User',
  'Time'
]

const table_fields_support = [
  'id',
  'department',
  'phone',
  'user',
  'time'
]


export default function SupportDashBoard() {

  return (
    <Fragment>
      <Navbar />

      <div className='flex items-center justify-center p-1'>
        <div className="w-3/4 p-4">




          <CustomTable
            title="Support Tickets"
            headers={table_headers_support}
            fields={table_fields_support}
            data={support_data}
            zebra={false}
            classes={"mt-2 h-[42rem]"}
          />





        </div>
      </div>
    </Fragment>

  );
}