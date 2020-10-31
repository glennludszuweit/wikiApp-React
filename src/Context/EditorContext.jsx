import React, { useState } from 'react';
import { createContext } from 'react';
import ReactSummernote from 'react-summernote';

export const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const [editorValue, setEditorValue] = useState();

  const addImage = ([file]) => {
    const reader = new FileReader();
    reader.onloadend = () => ReactSummernote.insertImage(reader.result);
    reader.readAsDataURL(file);
  };

  const editorChange = (data) => {
    setEditorValue(data);
  };

  return (
    <EditorContext.Provider
      value={{ editorValue, setEditorValue, addImage, editorChange }}
    >
      {children}
    </EditorContext.Provider>
  );
};
