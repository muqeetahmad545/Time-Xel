import { Col, DatePicker, Row, Typography } from "antd";
import axios from "axios";
import type { FormProps } from "antd";
import { Button, Form, Input, Select } from "antd";
import attendanceAPI from "../../../services/axios";
const { Title } = Typography;

type FieldType = {
  role?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  cnic?: number;
  designation?: string;
  salary?: number;
  dob?: Date;
  joiningDate?: Date;
};

const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
  try {
    const response = await attendanceAPI.post(
      `${process.env.REACT_APP_API_URL}/users`, values,
      {}
    );
    console.log("Success:", response.data);
  } catch (error) {
    console.error("Failed:", error);
  }
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
export const AddUser = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between bg-slate-200 p-1 rounded-md">
        <div className="border-l-4 border-secondary-color h-9 flex items-center">
          <Title level={5} className="ml-2">
            Add User
          </Title>
        </div>
        <DatePicker />
      </div>

      <Form
        className="mt-4 w-full"
        name="basic"
        labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        // style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Select role to Add User"
          name="role"
          rules={[
            { required: true, message: "Please Select one of the value!" },
          ]}
        >
          <Select
            defaultValue="Select role to Add User"
            //   style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "admin", label: "Admin" },
              { value: "user", label: "User" },
            ]}
          />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item<FieldType>
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: "Please input your First Name!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item<FieldType> label="Last Name" name="lastName">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item<FieldType>
              label="CNIC"
              name="cnic"
              rules={[{ required: true, message: "Please input CNIC!" }]}
            >
              <Input placeholder="xxxxx-xxxxxxx-x" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item<FieldType>
              label="Select User Designation"
              name="designation"
              rules={[
                { required: true, message: "Please Select one of the value!" },
              ]}
            >
              <Select
                defaultValue="Select User designation"
                //   style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "Intern", label: "Intern" },
                  {
                    value: "Associate Software Enginner",
                    label: "Associate Software Engineer",
                  },
                  { value: "Software Engineer", label: "Software Engineer" },
                  {
                    value: "Senior Software Enginner",
                    label: "Senior Software Enginner",
                  },
                  { value: "Principal", label: "Principal" },
                  { value: "COO", label: "COO" },
                  { value: "CTO", label: "CTO" },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item<FieldType>
              label="Salary"
              name="salary"
              rules={[{ required: true, message: "Please input User Salary!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item<FieldType>
              label="DOB"
              name="dob"
              rules={[{ required: true, message: "Please Input user dob" }]}
            >
              <DatePicker />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item<FieldType>
              label="Joining Date"
              name="joiningDate"
              rules={[
                { required: true, message: "Please Input user Joining Date" },
              ]}
            >
              <DatePicker />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please input Password!" }]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item<FieldType>
              label="Confirm Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Confirm Password must be matched with Password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item wrapperCol={{ offset: 0 }}>
          <Button type="primary" htmlType="submit">
            Add User
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
