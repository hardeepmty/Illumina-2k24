"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Stack,
  TableContainer,
} from "@mui/material";

const MaterialUITable: React.FC = () => {
  const [isFlexRow, setIsFlexRow] = useState<boolean>(false);
  const rows = Array.from({ length: 10 }, (_, index) => index + 1);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsFlexRow(screenWidth > 1200); 
    };

   
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <TableContainer style={{padding:"5%"}}>
     <Stack direction={isFlexRow ? "row" : "column"} spacing={4} style={{alignItems:"center",justifyContent:"center"}}>
      <Table sx={{ width: { xs: '100%', sm: '100%', md: '80%', lg: '70%', xl: '70%' } }}>
        <TableBody>
          <TableRow>
            <TableCell
              style={{
                ...cellStyle,
                width: "10%",
                overflow: "hidden",
                maxHeight: "100px",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                whiteSpace: "nowrap",
                fontWeight: "1000",
              }}
              rowSpan={11}
            >
              Day 1
            </TableCell>

            <TableCell style={{ ...cellStyle, fontWeight: "1000" }}>
              Time
            </TableCell>
            <TableCell style={{ ...cellStyle, fontWeight: "1000" }}>
            Event
            </TableCell>
          </TableRow>
          {rows.map((row, index) => (
            <TableRow key={row}>
              <TableCell style={{ ...cellStyle, width: "25%" }}></TableCell>
              <TableCell style={{ ...cellStyle, width: "50%" }}></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Table sx={{ width: { xs: '100%', sm: '100%', md: '80%', lg: '70%', xl: '70%' } }}>
        <TableBody>
          <TableRow>
            <TableCell
              style={{
                ...cellStyle,
                width: "10%",
                overflow: "hidden",
                maxHeight: "100px",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                whiteSpace: "nowrap",
                fontWeight: "1000",
              }}
              rowSpan={11}
            >
              Day 1
            </TableCell>

            <TableCell style={{ ...cellStyle, fontWeight: "1000" }}>
              Time
            </TableCell>
            <TableCell style={{ ...cellStyle, fontWeight: "1000" }}>
              Event
            </TableCell>
          </TableRow>
          {rows.map((row, index) => (
            <TableRow key={row}>
              <TableCell style={{ ...cellStyle, width: "25%" }}></TableCell>
              <TableCell style={{ ...cellStyle, width: "50%" }}></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
    </TableContainer>
  );
};

const cellStyle: React.CSSProperties = {
  border: "1px solid black",
  padding: "8px",
  textAlign: "center",
  height: "80px",
};

export default MaterialUITable;
