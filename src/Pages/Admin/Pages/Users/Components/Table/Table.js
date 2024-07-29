import React from 'react';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import './Table.scss';
import { Link } from 'react-router-dom';
import APIs from '../../../../../../APIs';
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

const CustomButton = ({userID}) => {
    return (
        <td style={{ display: 'flex', flexDirection:'column'}}>
           <Link to={'/admin/users/edit/'+userID} >
           <button style={{width:100, height: 30, marginBottom:5}} >Sửa</button>
           </Link>
           <button style={{width:100, height: 30}} onClick={()=> APIs.deleteUser(userID)}>Xóa</button>
        </td>
    );
}

const Table = ({ columns, data, path }) => {
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
            data,
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
                    <thead >
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()} style={{maxWidth:'100%', backgroundColor:'#adccde'}} >
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())} style={{maxWidth:'100%', backgroundColor:'#adccde'}}>
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
                                  <CustomButton userID={row.original._id} />
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
