"use client";

import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminEducationView from "@/components/admin-view/education";
import AdminExperienceView from "@/components/admin-view/experience";
import AdminHomeView from "@/components/admin-view/home";
import AdminProjectView from "@/components/admin-view/project";
import { addData, getData, updateData } from "@/services";
import { useEffect, useState } from "react";

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

  const [allData, setAllData] = useState({});
  const [update, setUpdate] = useState(false);

  const menuItems = [
    {
      id: "home",
      label: "home",
      component: (
        <AdminHomeView
          formData={homeViewFormData}
          setFormData={setHomeViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.home}
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
          handleSaveData={handleSaveData}
          data={allData?.about}
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
          handleSaveData={handleSaveData}
          data={allData?.experience}
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
          handleSaveData={handleSaveData}
          data={allData?.education}
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
          handleSaveData={handleSaveData}
          data={allData?.project}
        />
      ),
    },
    {
      id: "contact",
      label: "Contact",
      component: <AdminContactView />,
    },
  ];

  // create the list of data on page load
  async function extractAllData() {
    const data = await getData(currenSelectedTab);

    if (
      currenSelectedTab === "home" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setHomeViewFormData(data && data.data[0]);
      setUpdate(true);
    }

    if (
      currenSelectedTab === "about" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setAboutViewFormData(data && data.data[0]);
      setUpdate(true);
    }

    if (response?.success) {
      setAllData({
        ...allData,
        [currenSelectedTab]: response && response.data,
      });
    }
  }

  async function handleSaveData() {
    const dataMap = {
      home: homeViewFormData,
      education: educationViewFormData,
      experience: experienceViewFormData,
      about: aboutViewFormData,
      project: projectViewFormData,
    };

    const response = update
      ? await updateData(currenSelectedTab, dataMap[currenSelectedTab])
      : await addData(currenSelectedTab, dataMap[currenSelectedTab]);
    console.log(response, "response");

    if (response.success) {
      resetFormDatas();
      extractAllData;
    }
  }

  useEffect(() => {
    extractAllData;
  }, [currenSelectedTab]);

  function resetFormDatas() {
    setHomeViewFormData(initialHomeformData),
      setAboutViewFormData(initialAboutformData),
      setEducationViewFormData(initialEducationformData),
      setProjectViewFormData(initialProjectformData),
      setExperienceViewFormData(initialExperienceformData);
  }

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
              resetFormDatas();
              setUpdate(false);
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
