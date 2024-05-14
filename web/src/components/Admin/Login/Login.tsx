import { FaFacebookF } from "react-icons/fa6";
import { Typography } from "@mui/material";
import type { FormProps } from "antd";
import axios from "axios";
import { Button, Form, Input, Divider, message } from "antd";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../../../services/authLogin";
import { fetchUserData } from "../../../services/userApis/userApis";
export const Login = () => {
  type FieldType = {
    email?: string;
    password?: string;
  };
  const navigate = useNavigate();
  const onFinish = async (values: { email: string; password: string }) => {
    try {
      const token = await authLogin(values);
      localStorage.setItem("token", token);
      message.success("Login successfull");

      const reponse = await fetchUserData();
      console.log(reponse?.role);
      console.log(token);
      if (reponse?.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/employee/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      message.error("Invalid credentials");
    }
  };

  return (
    <div className="flex !items-center justify-center m-auto w-screen h-screen bg-slate-200">
      <div className=" h-3/4 w-3/4 px-8 py-8 flex justify-cente rounded-xl">
        <div className=" w-1/2 p-8 bg-white rounded-l-lg">
          <Typography variant="h4">Welcome to Tim_Xel</Typography>
          <div className="mt-8">
            <Divider />
          </div>
          <div>
            <Form
              name="basic"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
              className="py-8"
            >
              <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <div className="mr-10">
                <Typography className="!text-sm flex justify-end text-secondary-color">
                  Forgot Password?
                </Typography>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full mt-4 !bg-secondary-color"
                  >
                    Sign In
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
        <div className=" w-1/2 bg-secondary-color flex flex-col items-center justify-center px-4 text-white rounded-r-lg">
          <Typography variant="h2">
            Lorem ipsum, dolor sit amet cons?
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            quibusdam non tenetur magnam ullam culpa dolores, dicta temporibus
            impedit atque vero sequi praesentium, quasi et similique natus
            distinctio pariatur! Voluptate unde numquam illo dolorem placeat
            saepe, ipsa delectus ad reiciendis odit asperiores nihil consequatur
            alias debitis enim repudiandae perspiciatis quo vel libero
            voluptates temporibus quas explicabo. Velit natus, unde
            exercitationem praesentium nihil assumenda qui placeat alias odit
            doloremque porro ad in neque!
          </Typography>
          <Typography>Learn More &#8594;</Typography>
        </div>
      </div>
    </div>
  );
};
