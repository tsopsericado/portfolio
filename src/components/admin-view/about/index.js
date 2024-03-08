"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "aboutme",
    placeholder: "About Me",
    type: "text",
    label: "About Me ",
  },
  {
    name: "noofprojects",
    placeholder: "No of Projects",
    type: "text",
    label: "Enter of no projects",
  },
  {
    name: "yearofexperience",
    placeholder: "No of experience",
    type: "text",
    label: "Enter no of experience",
  },
  {
    name: "noofclients",
    placeholder: "No of clients",
    type: "text",
    label: "Enter no of clients",
  },
  {
    name: "skills",
    placeholder: "skills",
    type: "text",
    label: "Skills",
  },
];

export default function AdminAboutView({
  formData,
  setFormData,
  handleSaveData,
  data,
}) {
  return (
    <div className="w-full">
      <div className="bg-[#fffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10">
          {data && data.length
            // ? data.map((item) => (
            //     <div>
            //       <p className="flex flex-col gap-4 border p-4 border-green-600">
            //         {item.aboutme}
            //       </p>
            //       <p>{item.noofprojects}</p>
            //       <p>{item.yearofexperience}</p>
            //       <p>{item.noofclients}</p>
            //       <p>{item.skills}</p>
            //     </div>
              ))
            : null}
        </div>
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("about")}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}
