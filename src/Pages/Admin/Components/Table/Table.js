import React, { useState } from 'react';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import './Table.scss';
import { Link } from 'react-router-dom';
import { useMyContextProvider } from '../../../../store';

function DefaultColumnFilter({ column: { filterValue, preFilteredRows, setFilter } }) {
    const count = preFilteredRows.length;

    return (
        <input
            className="filter__input_search"
            value={filterValue || ''}
            onChange={(e) => {
                setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
            }}
            placeholder={`Tìm trong ${count} dòng...`}
        />
    );
}
function directToEdit(path, id) {
    document.location.href = `/admin${path}/edit/${id}`;

}

const CustomButton = ({path, id, text1, text2}) => {
    return (
        <td style={{ display: 'flex', flexDirection:'column'}}>
           <button style={{marginBottom:5}} onClick={() => directToEdit(path, id)}>{text1}</button>
           <button>{text2}</button>
        </td>
    );
}

function getBehaviors({ state, row, path, rawData, index, controller }) {
    switch (state) {
        case 'public':
            switch (controller.role) {
                case 'admin_1':
                   return (<CustomButton path={path} id={row.original._id} text1={'Chỉnh sửa'} text2={'Xóa'} />)
                    break;
            }
            break;

        case 'pending':
            switch (controller.role) {
                case 'admin_2':
                    return (<CustomButton path={path} id={`${rawData[index]._id}?state=pending`} text1={'Xem trước khi duyệt'} text2={'Duyệt bài'} />)
                    break;
            }
            break;
            
        case 'accepting':
            switch (controller.role) {
                case 'admin_2':
                    return (<CustomButton path={path} id={`rawData[index]._id?state=accepting`} text1={'Xem trước khi đăng'} text2={'Đăng bài'} />)
                    break;
            }
            break;
    }

    // switch (state) {
    //     case 'public':
    //         return controller.role == 'admin_1'
    //         ?
    //         (
    //             <td>
    //             <button onClick={() => {
    //                                 document.location.href = `/admin${path}/edit/${row.original._id}`;
    //                             }}>
    //                 <span>Chỉnh sửa</span>
    //             </button>
    //             <button>
    //                 <span>Xóa</span>
    //             </button>
    //         </td>
    //         )
    //         : controller.role == 'admin_2' ? (
    //             <td>
    //             <button onClick={() => {
    //                                 document.location.href = `/admin${path}/edit/${row.original._id}`;
    //                             }}>
    //                 <span>Xem trước khi duyệt</span>
    //             </button>
    //             <button>
    //                 <span>Duyệt</span>
    //             </button>
    //             </td>
    //         ) : controller.role == 'admin_3' ? (
    //         <td>
    //         <button onClick={() => {
    //                             document.location.href = `/admin${path}/edit/${row.original._id}`;
    //                         }}>
    //             <span>Xem trước khi đăng</span>
    //         </button>
    //         <button>
    //                 <span>Đăng tải</span>
    //             </button>
    //         </td>) : null
    //         ;
    //         break;
    //     case 'pending':
    //     case 'accepting':
    //     case 'excecuting':
    //         return controller.role == 'admin_1'
    //         ?
    //         (
    //             <td>
    //             <button onClick={() => {
    //                                 document.location.href = `/admin${path}/edit/${rawData[index]._id}`;
    //                             }}>
    //                 <span>Chỉnh sửa</span>
    //             </button>
    //             <button>
    //                 <span>Xóa</span>
    //             </button>
    //         </td>
    //         )
    //         : controller.role == 'admin_2' ? (
    //             <td>
    //             <button onClick={() => {
    //                                 document.location.href = `/admin${path}/edit/${rawData[index]._id}`;
    //                             }}>
    //                 <span>Xem trước khi duyệt</span>
    //             </button>
    //             <button>
    //                 <span>Duyệt</span>
    //             </button>
    //             </td>
    //         ) : controller.role == 'admin_3' ? (
    //         <td>
    //         <button onClick={() => {
    //                             document.location.href = `/admin${path}/edit/${rawData[index]._id}`;
    //                         }}>
    //             <span>Xem trước khi đăng</span>
    //         </button>
    //         <button>
    //                 <span>Đăng tải</span>
    //             </button>
    //         </td>) : null
    //         break;
    //     }
}

const Table = ({ columns, data, path, state, rawData }) => {
    const [controller, dispatch] = useMyContextProvider();

    const defaultColumn = React.useMemo(
        () => ({
            // Let's set up our default Filter UI
            Filter: DefaultColumnFilter,
        }),
        [],
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data: data,
            defaultColumn,
            initialState: { pageIndex: 0 },
        },
        useFilters,
        useSortBy,
        usePagination,
    );

    return (
        <>
            <div className="table__wrapper">
                <table {...getTableProps()} className="table">
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr
                                {...headerGroup.getHeaderGroupProps()}
                                style={{ maxWidth: '100%', backgroundColor: '#adccde' }}
                            >
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        style={{ maxWidth: '100%', backgroundColor: '#adccde' }}
                                    >
                                        {column.render('Header')}
                                        <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                                        <div>
                                            {column.canFilter &&
                                            column.id !== 'stt' &&
                                            column.id !== 'taive' &&
                                            column.id !== 'index' &&
                                            column.id !== 'state'
                                                ? column.render('Filter')
                                                : null}
                                        </div>
                                    </th>
                                ))}
                                <th></th>
                                <th></th>
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        const className =
                                            cell.column.id === 'stt'
                                                ? 'stt_cell'
                                                : cell.column.id === 'hovaten'
                                                ? 'hovaten_cell'
                                                : cell.column.id === 'taive'
                                                ? 'taive_cell'
                                                : cell.column.id === 'coquanbanhanh'
                                                ? 'coquanbanhanh_cell'
                                                : cell.column.id === 'trichyeu'
                                                ? 'trichyeu_cell'
                                                : cell.column.id === 'loaivanban'
                                                ? 'loaivanban_cell'
                                                : '';
                                        return (
                                            <td {...cell.getCellProps()} className={className}>
                                                {cell.column.id === 'taive' ? (
                                                    <a href={cell.value} download>
                                                        Tải về
                                                    </a>
                                                ) : (
                                                    cell.render('Cell')
                                                )}
                                            </td>
                                        );
                                    })}
                                    {getBehaviors({ state, row, path, rawData: rawData, index: i, controller })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>{' '}
                <span>
                    Trang{' '}
                    <strong>
                        {pageIndex + 1} / {pageOptions.length}
                    </strong>{' '}
                </span>
                <span className="gotopage">
                    | Đi đến trang:{' '}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={(e) => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0;
                            gotoPage(page);
                        }}
                        style={{ width: '100px' }}
                    />
                </span>{' '}
                <select
                    value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                    }}
                >
                    {[3, 5, 10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default Table;
