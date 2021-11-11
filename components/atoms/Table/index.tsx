import { memo } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Rating from '@mui/material/Rating';

type RowPropsUser = {
  id: string;
  first_name: string;
  last_name: string;
  email: string | null;
  gender: string;
  ip_address: string | null;
  mobile: string | null;
};

const columnGen: (rowData: RowPropsUser[]) => GridColDef[] = rowData => {
  return Object.keys(rowData[0]).map(key => ({ field: key })) as GridColDef[];
};

const Table = ({ data }: { data: RowPropsUser[] | null }) => {
  return !data ? (
    <>no data</>
  ) : (
    <>
      <Rating name="read-only" value={2} readOnly />
      <DataGrid rows={data} columns={columnGen(data)} />
    </>
  );
};

export default memo(Table);
