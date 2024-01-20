
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Stack,
  TableContainer,
} from "@mui/material";
interface TableComponentProps {
  eventData: Array<{ time: string; event: string }>;
}
const TableComponent: React.FC<TableComponentProps> = ({ eventData }) => {

  return (
    <Table
      sx={{ width: { xs: "100%", sm: "100%", md: "80%", lg: "70%", xl: "70%" } }}
    >
      <TableBody>
        <TableRow>
          <TableCell
            style={{
              border: "1px solid black",
              padding: "8px",
              textAlign: "center",
              height: "80px",
              width: "10%",
              overflow: "hidden",
              maxHeight: "100px",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              whiteSpace: "nowrap",
              fontWeight: "1000",
              fontSize:"2rem",
            }}
            rowSpan={11}
          >
            Day 1
          </TableCell>

          <TableCell
            style={{
              border: "1px solid black",
              padding: "8px",
              textAlign: "center",
              height: "80px",
              fontWeight: "1000",
              fontSize:"2rem",
            }}
          >
            Time
          </TableCell>

          <TableCell
            style={{
              border: "1px solid black",
              padding: "8px",
              textAlign: "center",
              height: "80px",
              fontWeight: "1000",
              fontSize:"2rem",
            }}
          >
            Event
          </TableCell>
        </TableRow>
        {eventData.map((data, index) => (
          <TableRow key={index}>
            <TableCell
              style={{
                border: "1px solid black",
                padding: "8px",
                textAlign: "center",
                height: "80px",
                width: "25%",
                fontSize:"1rem",
              }}
            >{data.time}</TableCell>
            <TableCell
              style={{
                border: "1px solid black",
                padding: "8px",
                textAlign: "center",
                height: "80px",
                width: "50%",
                fontSize:"1rem",
              }}
            >{data.event}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
