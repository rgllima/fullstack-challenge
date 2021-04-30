import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Box, makeStyles } from "@material-ui/core";
import tableStyles from "./Styles";

const useStyles = makeStyles((theme) => tableStyles(theme));

const Table = ({columns, rows, loading = false, onCellClick, pageSize = 5}) => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <DataGrid
        className={classes.dataGrid}
        onCellClick={({row}) => onCellClick(row)}
        columnBuffer={5}
        rowHeight={40}
        rows={rows}
        loading={loading}
        columns={columns}
        pageSize={pageSize}
      />
    </Box>
  );
}

export default Table
