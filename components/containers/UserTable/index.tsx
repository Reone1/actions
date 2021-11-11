// import { useState, useCallback } from 'react';
import { NextPage } from 'next';
import Table from '@atoms/Table';

type Props = {
  id: string;
  first_name: string;
  last_name: string;
  email: string | null;
  gender: string;
  ip_address: string | null;
  mobile: string | null;
}[];

const UserTable: NextPage<Props> = user => <Table data={user} />;

UserTable.getInitialProps = async ctx => {
  const res = await fetch('http://localhost:3000/api/hello', {
    method: 'GET',
    headers: {
      'Content-type': 'applictaion/json',
    },
  });
  const json: Props = await res.json();
  return json;
};

export default UserTable;
