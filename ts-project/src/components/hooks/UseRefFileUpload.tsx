import { useRef } from "react";

export default function UseRefFileUpload() {
  const fileInputRef = useRef<any>(null);
  const focusInputRef = useRef<any>(null);

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFocus = () => {
    if (focusInputRef.current) {
      focusInputRef.current.focus();
    }
  };

  return (
    <>
      <input type="text" ref={focusInputRef} />
      <button onClick={handleFocus}>Focus</button>{" "}
      <input
        type="file"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <button onClick={handleClick}>Select File</button>
    </>
  );
}
