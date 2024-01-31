"use client";

import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminEducationView from "@/components/admin-view/education";
import AdminExperienceView from "@/components/admin-view/experience";
import AdminHomeView from "@/components/admin-view/home";
import AdminProjectView from "@/components/admin-view/project";
import { useState } from "react";

const initialHomeformData = {
  heading: "",
  summary: "",
};
const initialAboutformData = {
  aboutme: "",
  noofprojects: "",
  yearofexperience: "",
  noofclients: "",
  skills: "",
};
const initialExperienceformData = {
  position: "",
  company: "",
  duration: "",
  location: "",
  jobprofile: "",
};
const initialEducationformData = {
  degree: "",
  year: "",
  college: "",
};
const initialProjectformData = {
  name: "",
  technologies: "",
  website: "",
  github: "",
};

export default function AdminView() {
  const [currenSelectedTab, setCurrenSelectedTab] = useState("home");
  const [aboutViewFormData, setAboutViewFormData] =
    useState(initialAboutformData);
  const [homeViewFormData, setHomeViewFormData] = useState(initialHomeformData);
  const [experienceViewFormData, setExperienceViewFormData] = useState(
    initialExperienceformData
  );
  const [educationViewFormData, setEducationViewFormData] = useState(
    initialEducationformData
  );
  const [projectViewFormData, setProjectViewFormData] = useState(
    initialProjectformData
  );

  const menuItems = [
    {
      id: "home",
      label: "home",
      component: (
        <AdminHomeView
          formData={homeViewFormData}
          setFormData={setHomeViewFormData}
        />
      ),
    },
    {
      id: "about",
      label: "About",
      component: (
        <AdminAboutView
          formData={aboutViewFormData}
          setFormData={setAboutViewFormData}
        />
      ),
    },
    {
      id: "experience",
      label: "Experience",
      component: (
        <AdminExperienceView
          formData={experienceViewFormData}
          setFormData={setExperienceViewFormData}
        />
      ),
    },
    {
      id: "education",
      label: "Education",
      component: (
        <AdminEducationView
          formData={educationViewFormData}
          setFormData={setEducationViewFormData}
        />
      ),
    },
    {
      id: "project",
      label: "Project",
      component: (
        <AdminProjectView
          formData={projectViewFormData}
          setFormData={setProjectViewFormData}
        />
      ),
    },
    {
      id: "contact",
      label: "Contact",
      component: <AdminContactView />,
    },
  ];

  return (
    <div className="border-b border-gray-500 ">
      <nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="p-4 font-bold text-xl text-black"
            onClick={() => {
              setCurrenSelectedTab(item.id);
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-10 p-10">
        {menuItems.map(
          (item) => item.id === currenSelectedTab && item.component
        )}
      </div>
    </div>
  );
}
