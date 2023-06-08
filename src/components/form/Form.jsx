import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from 'yup';
import { signUpSchema } from "../../schema/signUpSchema.js";

const Form = () => {
  const [success, setSuccess] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      familyName: "",
      userName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      checkRule: false,
    },
		onSubmit: () => {
			const isSuccess = Object.keys(formik.errors).length === 0;
			setSuccess(isSuccess);
			if (isSuccess) {
				toast.success('Registration Was Successful.');
			}
		},
		validationSchema:{signUpSchema}
  });

  return (
		<>
    <form
      onSubmit={formik.handleSubmit}
      className="w-72 flex flex-col items-center justify-center"
    >
      <h1 className="w-72 text-center text-white text-4xl bg-green-600 p-2 rounded mb-2 font-medium">
        Sign Up
      </h1>
      <div className="flex flex-col items-center justify-center">
        <input
          className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
          type="text"
          // set with {...formik.getFieldProps("name")}
          // name="name"
          // value={formik.values.name}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps("name")}
          placeholder="Name: Masoud"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-400 text-xs font-bold text-center">
            {formik.errors.name}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-center justify-center">
        <input
          className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
          type="text"
          {...formik.getFieldProps("familyName")}
          placeholder="FamilyName: Abbasi"
        />
        {formik.touched.familyName && formik.errors.familyName ? (
          <div className="text-red-400 text-xs font-bold text-center">
            {formik.errors.familyName}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-center justify-center">
        <input
          className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
          type="text"
          {...formik.getFieldProps("userName")}
          placeholder="UserName: My20Masoud"
        />
        {formik.touched.userName && formik.errors.userName ? (
          <div className="text-red-400 text-xs font-bold text-center">
            {formik.errors.userName}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-center justify-center">
        <input
          className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
          type="email"
          {...formik.getFieldProps("email")}
          placeholder="Email: Masoud.abbasi.71@gmail.com"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-400 text-xs font-bold text-center">
            {formik.errors.email}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-center justify-center">
        <input
          className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
          type="phone"
          {...formik.getFieldProps("phone")}
          placeholder="Phone: 09359626811"
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-red-400 text-xs font-bold text-center">
            {formik.errors.phone}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-center justify-center">
        <input
          className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
          type="password"
          {...formik.getFieldProps("password")}
          placeholder="Password: Masoud1234"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-400 text-xs font-bold text-center">
            {formik.errors.password}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-center justify-center">
        <input
          className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
          type="password"
          {...formik.getFieldProps("confirmPassword")}
          placeholder="Confirm Password: Masoud1234"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="text-red-400 text-xs font-bold text-center">
            {formik.errors.confirmPassword}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex w-72 p-1 rounded bg-green-700 items-center justify-center mb-2">
          <input
            type="checkbox"
            {...formik.getFieldProps("checkRule")}
            checked={formik.values.checkRule}
          />
          <span className="ml-2 text-slate-300">
            Accept the{" "}
            <a href="#" className="text-blue-300">
              Rules
            </a>
            !
          </span>
        </div>
        {formik.touched.checkRule && formik.errors.checkRule ? (
          <div className="text-red-400 text-xs font-bold text-center">
            {formik.errors.checkRule}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          type="submit"
          className="w-72 font-bold rounded bg-green-500 text-white text-center p-3 shadow-xl hover:bg-green-600"
        >
          Sign Up
        </button>
      </div>
    </form>
		<ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>;
			</>
  );
};

export default Form;
