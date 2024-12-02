'use client';
import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

interface ExportToExcelProps {
  fileName: string;
  tableId: string;
}

const ExportTableToExcel: React.FC<ExportToExcelProps> = ({
  fileName,
  tableId,
}) => {
  // Function to export table data to Excel
  const exportTableToExcel = () => {
    // Get the HTML table element by ID
    const table = document.getElementById(tableId);

    if (!table) {
      console.error(`Table with id "${tableId}" not found.`);
      return;
    }

    // Convert the table to a worksheet
    const worksheet = XLSX.utils.table_to_sheet(table);

    // Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Generate binary string from the workbook
    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    // Create a Blob from the binary string
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });

    // Save the file using FileSaver
    saveAs(data, `${fileName}.xlsx`);
  };

  return (
    <div>
      <div>
        <button onClick={exportTableToExcel}>Download</button>
        <div>Export Table to Excel</div>
      </div>
    </div>
  );
};

export default ExportTableToExcel;
