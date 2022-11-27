import React, { ReactElement, useEffect } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Tag } from 'antd';
import './Table.css'
import { color, dateEnd, dateStart } from '../../utils';
import { getData } from '../../store/actions/tableActions';
import { useDispatch, useSelector } from 'react-redux';

interface DataType {
  key: React.Key;
  name: string;
  id: number,
  period_start: string,
  period_end: string,
  companyName: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Work item',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    fixed: 'left',
  },
  {
    title: '01 Sep - 07 Sep',
    children: [
      {
        title: '1',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 10,
        render: (_, { id, period_start, period_end }) => {
          let dateNow = 1;
          return dateStart(period_start, dateNow) && dateEnd(period_end, dateNow) ?
            <>
              <Tag className='customTag' color={color(id)}>
              </Tag>
            </>
            : null
        },
      },
      {
        title: '2',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 10,
        render: (_, { id, period_start, period_end }) => {
          let dateNow = 2;
          return dateStart(period_start, dateNow) && dateEnd(period_end, dateNow) ?
            <>
              <Tag className='customTag' color={color(id)}>

              </Tag>
            </>
            : null
        },
      },
      {
        title: '3',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 10,
        render: (_, { id, period_start, period_end }) => {
          let dateNow = 3;
          return dateStart(period_start, dateNow) && dateEnd(period_end, dateNow) ?
            <>
              <Tag className='customTag' color={color(id)}>

              </Tag>
            </>
            : null
        },
      },
      {
        title: '4',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 10,
        render: (_, { id, period_start, period_end }) => {
          let dateNow = 4;
          return dateStart(period_start, dateNow) && dateEnd(period_end, dateNow) ?
            <>
              <Tag className='customTag' color={color(id)} >

              </Tag>
            </>
            : null
        },
      },
      {
        title: '5',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 10,
        render: (_, { id, period_start, period_end }) => {
          let dateNow = 5;
          return dateStart(period_start, dateNow) && dateEnd(period_end, dateNow) ?
            <>
              <Tag className='customTag' color={color(id)} >

              </Tag>
            </>
            : null
        },
      },
      {
        title: '6',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 10,
        render: (_, { id, period_start, period_end }) => {
          let dateNow = 6;
          return dateStart(period_start, dateNow) && dateEnd(period_end, dateNow) ?
            <>
              <Tag className='customTag' color={color(id)} >

              </Tag>
            </>
            : null
        },
      },
      {
        title: '7',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 10,
        render: (_, { id, period_start, period_end }) => {
          let dateNow = 7;
          return dateStart(period_start, dateNow) && dateEnd(period_end, dateNow) ?
            <>
              <Tag className='customTag' color={color(id)} >

              </Tag>
            </>
            : null
        },
      },
    ],
  },
  {
    title: 'companyName',
    children: [
      {
        title: '8',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 10,
        render: (_, { id, period_start, period_end }) => {
          let dateNow = 8;
          return dateStart(period_start, dateNow) && dateEnd(period_end, dateNow) ?
            <>
              <Tag className='customTag' color={color(id)} >

              </Tag>
            </>
            : null
        },
      },
      {
        title: '9',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 10,
        render: (_, { id, period_start, period_end }) => {
          let dateNow = 9;
          return dateStart(period_start, dateNow) && dateEnd(period_end, dateNow) ?
            <>
              <Tag className='customTag' color={color(id)} >

              </Tag>
            </>
            : null
        },
      },
      {
        title: '10',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 10,
        render: (_, { id, period_start, period_end }) => {
          let dateNow = 10;
          return dateStart(period_start, dateNow) && dateEnd(period_end, dateNow) ?
            <>
              <Tag className='customTag' color={color(id)} >

              </Tag>
            </>
            : null
        },
      },
      {
        title: '11',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 10,
        render: (_, { id, period_start, period_end }) => {
          let dateNow = 11;
          return dateStart(period_start, dateNow) && dateEnd(period_end, dateNow) ?
            <>
              <Tag className='customTag' color={color(id)} >

              </Tag>
            </>
            : null
        },
      },
      {
        title: '12',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 10,
        render: (_, { id, period_start, period_end }) => {
          let dateNow = 12;
          return dateStart(period_start, dateNow) && dateEnd(period_end, dateNow) ?
            <>
              <Tag className='customTag' color={color(id)} >

              </Tag>
            </>
            : null
        },
      },
      {
        title: '13',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 10,
        render: (_, { id, period_start, period_end }) => {
          let dateNow = 13;
          return dateStart(period_start, dateNow) && dateEnd(period_end, dateNow) ?
            <>
              <Tag className='customTag' color={color(id)} >

              </Tag>
            </>
            : null
        },
      },
      {
        title: '14',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 10,
        render: (_, { id, period_start, period_end }) => {
          let dateNow = 14;
          return dateStart(period_start, dateNow) && dateEnd(period_end, dateNow) ?
            <>
              <Tag className='customTag' color={color(id)} >

              </Tag>
            </>
            : null
        },
      },
    ],
  },
  {
    title: '15 Sep - 21 Sep',
    children: [
      {
        title: '15',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 10,
        render: (_, { id, period_start, period_end }) => {
          let dateNow = 15;
          return dateStart(period_start, dateNow) && dateEnd(period_end, dateNow) ?
            <>
              <Tag className='customTag' color={color(id)} >

              </Tag>
            </>
            : null
        },
      },
      {
        title: '16',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 10,
        render: (_, { id, period_start, period_end }) => {
          let dateNow = 16;
          return dateStart(period_start, dateNow) && dateEnd(period_end, dateNow) ?
            <>
              <Tag className='customTag' color={color(id)} >

              </Tag>
            </>
            : null
        },
      },
      {
        title: '17',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 10,
        render: (_, { id, period_start, period_end }) => {
          let dateNow = 17;
          return dateStart(period_start, dateNow) && dateEnd(period_end, dateNow) ?
            <>
              <Tag className='customTag' color={color(id)} >

              </Tag>
            </>
            : null
        },
      },
      {
        title: '18',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 10,
        render: (_, { id, period_start, period_end }) => {
          let dateNow = 18;
          return dateStart(period_start, dateNow) && dateEnd(period_end, dateNow) ?
            <>
              <Tag className='customTag' color={color(id)} >

              </Tag>
            </>
            : null
        },
      },
      {
        title: '19',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 10,
        render: (_, { id, period_start, period_end }) => {
          let dateNow = 19;
          return dateStart(period_start, dateNow) && dateEnd(period_end, dateNow) ?
            <>
              <Tag className='customTag' color={color(id)} >

              </Tag>
            </>
            : null
        },
      },
    ],
  },

];


const TableStyled: React.FC = (): ReactElement => {
  const { values } = useSelector((state: any) => state.table)
  const dispatch = useDispatch();
  const data: DataType[] = [];
  
  values.chart && recures(values.chart);

  function recures(values: any): any {
    data.push({
      ...values,
      key: values.id,
      name: values.title,
      companyName: values.title,
    });

    if (values.sub) {
      values.sub.forEach((item: any) => {
        return recures(item)
      })
    } else {
      return
    }
  }

  useEffect(() => {
    getData()(dispatch);
  }, []);

  return (
    <>
      <h3>
        {values && values.project + ' / ' + values.period}
      </h3>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        size="middle"
        scroll={{ x: 'auto', y: 'auto' }}
      />
    </>
  )
};

export default TableStyled;