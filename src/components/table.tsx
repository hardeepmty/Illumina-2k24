import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  useTheme,
} from "@mui/material";

interface TableComponentProps {
  eventData: Array<{ time: string; event: string }>;
  day: string;
}

const TableComponent: React.FC<TableComponentProps> = ({ eventData, day }) => {
  const theme = useTheme();

  return (
    <Table
      className="table"
      sx={{
        width: "100%",
        [theme.breakpoints.up("md")]: {
          width: "80%",
        },
        [theme.breakpoints.up("lg")]: {
          width: "70%",
        },
      }}
    >
      <TableBody>
        <TableRow>
          <TableCell
            style={{
              border: "1px solid white",
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
              fontSize: "2rem",
              color:"white"
            }}
            rowSpan={11}
          >
            {day}
          </TableCell>

          <TableCell
            style={{
              border: "1px solid white",
              padding: "8px",
              textAlign: "center",
              height: "80px",
              fontWeight: "1000",
              fontSize: "2rem",
              color:"white"
            }}
          >
            Time
          </TableCell>

          <TableCell
            style={{
              border: "1px solid white",
              padding: "8px",
              textAlign: "center",
              height: "80px",
              fontWeight: "1000",
              fontSize: "2rem",
              color:"white"
            }}
          >
            Event
          </TableCell>
        </TableRow>
        {eventData.map((data, index) => (
          <TableRow key={index}>
            <TableCell
              style={{
                border: "1px solid white",
                padding: "8px",
                textAlign: "center",
                height: "80px",
                width: "25%",
                fontSize: "1rem",
                color:"white"
              }}
            >
              {data.time}
            </TableCell>
            <TableCell
              style={{
                border:"1px solid white",
                padding: "8px",
                textAlign: "center",
                height: "80px",
                width: "50%",
                fontSize: "1rem",
                color:"white"
              }}
            >
              {data.event}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
