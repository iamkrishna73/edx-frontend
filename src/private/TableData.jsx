import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { getAllEnquiries } from "../api";
import { useAuth } from "../context/AuthContext";
import EditEnquiryModel from "./model/EditEnquiryModel";

// Styled Container
const TableContainer = styled.div`
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Custom styles for DataTable
const customStyles = {
  rows: {
    style: {
      fontSize: "10px",
      minHeight: "40px",
    },
  },
  headCells: {
    style: {
      fontSize: "14px",
      fontWeight: "bold",
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      fontSize: "16px",
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
};

const TableData = ({ selectedCourse, selectedStatus, selectedClassMode }) => {
  const [enquiries, setEnquiries] = useState([]);
  const [filteredEnquiries, setFilteredEnquiries] = useState([]);
  const [showEditEnquiryModel, setShowEditEnquiryModel] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const { auth } = useAuth();
  const userId = auth.user.userId;

  useEffect(() => {
    const fetchEnquiries = async (userId) => {
      try {
        const response = await getAllEnquiries(userId);
        console.log("response data", response.data);
        setEnquiries(response.data);
      } catch (error) {
        console.error("Error fetching enquiries:", error);
      }
    };

    fetchEnquiries(userId);
  }, []);

  useEffect(() => {
    const filterEnquiries = () => {
      let filtered = enquiries;

      if (selectedCourse) {
        filtered = filtered.filter(
          (enquiry) => enquiry.course === selectedCourse
        );
      }
      if (selectedStatus) {
        filtered = filtered.filter(
          (enquiry) => enquiry.enquiryStatus === selectedStatus
        );
      }
      if (selectedClassMode) {
        filtered = filtered.filter(
          (enquiry) => enquiry.classMode === selectedClassMode
        );
      }
      setFilteredEnquiries(filtered);
    };

    filterEnquiries();
  }, [selectedCourse, selectedStatus, selectedClassMode, enquiries]);

  const handleEditEnquiryModel = (row) => {
    console.log("sele", row);
    setSelectedRowData(row); // Set the data for the selected row
    setShowEditEnquiryModel(true);
  };

  const handleSave = async () => {
    setShowEditEnquiryModel(false);
    try {
      const response = await getAllEnquiries(userId); // Re-fetch updated enquiries
      setEnquiries(response.data); // Update state with new data
    } catch (error) {
      console.error("Error re-fetching enquiries:", error);
    }
  };

  const columns = [
    {
      name: "S.NO",
      cell: (row, index) => index + 1,
      sortable: false,
    },
    {
      name: "Supplier Name",
      selector: (row) => row.studentName,
      sortable: true,
    },
    {
      name: "Course",
      selector: (row) => row.course,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.enquiryStatus,
      sortable: true,
    },
    {
      name: "Class Mode",
      selector: (row) => row.classMode,
      sortable: true,
    },
    {
      name: "Enquiry Date",
      selector: (row) => row.enquiryDate,
      sortable: true,
    },
    {
      name: "Contact Number",
      selector: (row) => row.contactNumber,
      sortable: false,
    },
    {
      name: "Actions",
      cell: (row) => (
        <button
          onClick={() => handleEditEnquiryModel(row)}
          className="btn btn-primary btn-sm"
          data-bs-target="#exampleModal"
        >
          Edit
        </button>
      ),
      ignoreRowClick: true,
    },
  ];

  return (
    <TableContainer>
      <h4>Filtered Enquiries</h4>
      <DataTable
        columns={columns}
        data={filteredEnquiries}
        pagination
        highlightOnHover
        striped
        responsive
        noDataComponent={<p>No enquiries found matching the filters.</p>}
        customStyles={customStyles}
      />
      {showEditEnquiryModel && selectedRowData && (
        <EditEnquiryModel
          initialData={selectedRowData}
          onClose={() => setShowEditEnquiryModel(false)}
          onSave={handleSave}
        />
      )}
    </TableContainer>
  );
};

export default TableData;
