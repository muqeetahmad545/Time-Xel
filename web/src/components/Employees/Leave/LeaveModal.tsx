import { DatePicker, Divider, Modal } from "antd";
import { useState } from "react";
import { Typography, Button, Form, Row, Col, Input, Select } from "antd";
import { EditOutlined } from "@ant-design/icons";
import type { FormProps } from "antd";
const { Title } = Typography;
export const LeaveModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  type FieldType = {
    role?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <div className="flex justify-between bg-slate-200 p-1 rounded-md">
        <div className="border-l-4 border-secondary-color h-9 flex items-center">
          <Title level={5} className="ml-2">
            Leaves
          </Title>
        </div>
        <Button onClick={showModal}>
          <EditOutlined />
          Leave Request
        </Button>
      </div>
      <Modal
        title="Leave Request"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="!w-[70%]"
      >
        <Divider className="!mt-3" />
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
            label="Leave Type"
            name="role"
            rules={[
              { required: true, message: "Please Select one of the value!" },
            ]}
          >
            <Select
              defaultValue="Choose Leave Type"
              //   style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item<FieldType>
                label="From"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Please input Leave's Start Date",
                  },
                ]}
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<FieldType>
                label="To"
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Please input Leave's Start Date",
                  },
                ]}
              >
                <DatePicker/>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item<FieldType>
            label="Reason"
            name="email"
            rules={[{ required: true, message: "You have to Inform the Reason" }]}
          >
            <Input.Password />
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
                name="confirmPassword"
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
      </Modal>
    </div>
  );
};
