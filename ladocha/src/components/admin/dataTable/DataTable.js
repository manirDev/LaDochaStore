import React, { useState } from 'react'
import './DataTable.css'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

function DataTable(props) {

    const [data, setData] = useState(props.rows);

    const handleDelete = (id) => {
        // call delete api
        console.log(id + "has been Deleted");
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 100,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={`/${props.slug}/${params.row.id}`}>
                            <img src="/view.svg" alt="" />
                        </Link>
                        <div className="delete" onClick={() => handleDelete(params.row.id)}>
                            <img src="/delete.svg" alt="" />
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className='dataTable'>
            
            <DataGrid
                className="datagrid"
                rows={props.rows}
                columns={props.columns.concat(actionColumn)}

                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 9,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    }
                }}


                pageSizeOptions={[9, 10, 25]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
            />
        </div>
    )
}

export default DataTable