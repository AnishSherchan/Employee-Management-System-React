import React, { useState, useEffect } from "react";
import { Layout, Table, Modal, Input, Select } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import EmployeeData from "../../Employeedata.json";
import { toast } from "react-toastify";
const EmployeeTable = ({ empdata, NewUpdate }) => {
  const [employeedata, setemployeeInfodata] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  // ! Here editing obj simply means editing exercise
  const [editingEmployees, setEditingemployee] = useState(null);
  const { Option } = Select;

  // Function for updating field
  const EditEmployee = async (emp_id, emp_name, location, gender) => {
    try {
      const body = {
        emp_id,
        emp_name,
        location,
        gender,
      };

      const newArr = employeedata.map((obj) => {
        if (obj.emp_id === emp_id) {
          return {
            ...obj,
            emp_name: emp_name,
            location: location,
            gender: gender,
          };
        }

        return obj;
      });
      localStorage.setItem("Emp-data", JSON.stringify(newArr));
      NewUpdate();
      toast.success("Employee Edited", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  // ! Here obj simply means Exercise
  const onDeleteEmployee = async (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this Employee?",
      okText: "Yes",
      okType: "danger",
      onOk: async () => {
        const emp_id = record.emp_id;
        try {
          for (let i = 0; i < employeedata.length; i++) {
            if (employeedata[i].emp_id == emp_id) {
              employeedata.splice(i, 1);
              break;
            }
          }
          localStorage.setItem("Emp-data", JSON.stringify(employeedata));
          toast.success("Employee Deleted", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          NewUpdate();
        } catch (err) {
          console.error(err.message);
        }
        setemployeeInfodata((pre) => {
          return pre.filter((exe) => exe.emp_id !== record.emp_id);
        });
      },
    });
  };
  // ! Here obj simply means Exercise
  const onEditEmployee = (record) => {
    setIsEditing(true);
    setEditingemployee({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingemployee(null);
  };
  const columns = [
    {
      key: "1",
      title: "Employee ID",
      dataIndex: "emp_id",
      sorter: (a, b) => a.emp_id - b.emp_id,
    },
    {
      key: "2",
      title: "Employee Name",
      dataIndex: "emp_name",
      sorter: (a, b) => a.emp_name.length - b.emp_name.length,
    },
    {
      key: "3",
      title: "Location",
      dataIndex: "location",
      sorter: (a, b) => a.location.length - b.location.length,
    },
    {
      key: "4",
      title: "Gender",
      dataIndex: "gender",
      sorter: (a, b) => a.gender.length - b.gender.length,
    },

    {
      key: "6",
      title: "Action",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditEmployee(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteEmployee(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const EmployeeInfo = async () => {
    // Checking if data is located on Localstorage
    if (localStorage.getItem("Emp-data") !== null) {
      setemployeeInfodata(JSON.parse(localStorage.getItem("Emp-data")));
    } else {
      localStorage.setItem("Emp-data", JSON.stringify(EmployeeData));
      setemployeeInfodata(EmployeeData);
    }
  };

  useEffect(() => {
    EmployeeInfo();
  }, [empdata]);
  return (
    <div>
      <Table
        title={() => "Employee Data"}
        bordered
        columns={columns}
        dataSource={employeedata}
      />{" "}
      <Modal
        title="Edit Employee"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setemployeeInfodata((pre) => {
            return pre.map((obj) => {
              if (obj.emp_id === editingEmployees.emp_id) {
                let emp_id = obj.emp_id;
                let emp_name = editingEmployees.emp_name;
                let location = editingEmployees.location;
                let gender = editingEmployees.gender;
                EditEmployee(emp_id, emp_name, location, gender);

                return editingEmployees;
              } else {
                return obj;
              }
            });
          });
          resetEditing();
        }}
      >
        <p>Employee Name</p>
        <Input
          name="emp_name"
          value={editingEmployees?.emp_name}
          onChange={(e) => {
            setEditingemployee((pre) => {
              return { ...pre, emp_name: e.target.value };
            });
          }}
        />
        <p>Employee Location</p>
        <Input
          value={editingEmployees?.location}
          onChange={(e) => {
            setEditingemployee((pre) => {
              return { ...pre, location: e.target.value };
            });
          }}
        />
        <p>Gender</p>
        <Select
          placeholder="Gender"
          value={editingEmployees?.gender}
          onChange={(e) => {
            setEditingemployee((pre) => {
              return { ...pre, gender: e };
            });
          }}
        >
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
        </Select>
      </Modal>
    </div>
  );
};

export default EmployeeTable;
