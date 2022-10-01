import React, { useState } from "react";
import { Button, Form, Input, Select, Modal } from "antd";
import PrimaryBtn from "../buttons/primary";
const NewEmployee = ({ empdata, NewUpdate }) => {
  const [form] = Form.useForm();
  console.log(empdata);
  const [isEditing, setIsEditing] = useState(false);
  const { Option } = Select;
  let emp_id;
  const onEditEmployee = () => {
    setIsEditing(true);
  };

  const onReset = () => {
    form.resetFields();
  };
  const nextId = () => {
    emp_id = Math.floor(Math.random() * 10001);
  };
  nextId();
  const onFinish = (values: any) => {
    const { emp_name, location, gender } = values;
    const data = {
      emp_id: emp_id,
      emp_name: emp_name,
      location: location,
      gender: gender,
    };
    // console.log(data);

    empdata.push(data);
    localStorage.setItem("Emp-data", JSON.stringify(empdata));
    NewUpdate();
    onReset();
    resetEditing();
  };

  const resetEditing = () => {
    setIsEditing(false);
  };
  return (
    <div>
      <PrimaryBtn
        title="Add new Employee"
        onClick={() => {
          onEditEmployee();
        }}
      />{" "}
      <Modal
        title="Edit Employee"
        visible={isEditing}
        okText="Close modal!"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          resetEditing();
        }}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Employee Name"
            name="emp_name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Select placeholder="Gender">
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Add new Employee
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default NewEmployee;
