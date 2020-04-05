import React, { useState } from "react";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import InputFile from "@kiwicom/orbit-components/lib/InputFile";
import Text from "@kiwicom/orbit-components/lib/Text";
import styled from "styled-components";

function Home() {
  const emptyFile = { name: null };
  const [file, setFile] = useState(emptyFile);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
      console.log("file", file);
    }
  };

  const handleFileRemove = () => {
    setFile(emptyFile);
  };

  return (
    <div>
      <Heading>Maleria Detection</Heading>

      <UploadSection>
        <Text size="large">Upload file</Text>
        <InputFile
          onChange={handleFileChange}
          fileName={file.name}
          onRemoveFile={handleFileRemove}
        />
      </UploadSection>
    </div>
  );
}

export default Home;

const UploadSection = styled.div`
  margin: 2rem;
  width: 500px;
`;
