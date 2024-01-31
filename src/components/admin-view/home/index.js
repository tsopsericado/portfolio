"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "heading",
    placeholder: "Enter a heading text",
    type: "text",
    label: "Enter heading text ",
  },
  {
    name: "summary",
    placeholder: "Enter carreer summary",
    type: "text",
    label: "Enter carreer summary",
  },
];

export default function AdminHomeView({ formData, setFormData }) {
  console.log(formData);
  return (
    <div className="w-full">
      <div className="bg-[#fffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]">
          Add Info
        </button>
      </div>
    </div>
  );
}
