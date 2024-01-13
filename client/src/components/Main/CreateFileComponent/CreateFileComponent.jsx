import React from "react";
import createFileImage from "../../../assets/createfile-image.png";
import CreateFileForm from "./CreateFileForm/CreateFileForm";

const CreateFileComponent = () => {
  return <section id="create-file-section">
    <img id="create-file-image" src={createFileImage} alt="Create a new File Image" />
    <CreateFileForm />
  </section>;
};

export default CreateFileComponent;
