import React, { useRef } from 'react';

interface FileUploadProps {
    setFile: Function;
    accept: string
}

const UploadFiles:React.FC<FileUploadProps> = ({ setFile, accept, children}) => {
    // 
    const ref = useRef<HTMLInputElement>()
    //
    const ChangeFile = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.files); 
    }


    return (
        <div onClick={() => ref.current.click()}>
            <input type="file" 
                accept={accept}
                style={{display: 'none'}}
                ref={ref}
                onChange={ChangeFile}
            />
            {children}
        </div>
    );
};

export default UploadFiles;