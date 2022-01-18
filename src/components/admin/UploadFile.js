const UploadFile = ({ icon ="image", onChange }) => {
    return (
      <div>
        <label htmlFor={"file"+icon} className="w-50 text-center border-style-color">
          <i className={"fs-1 bi bi-"+ icon}></i>
          <i className="fs-2 bi bi-plus"></i>
        </label>

        <input
          onChange={onChange}
          id={"file"+icon}
          className="d-none"
          type="file"
          
        />
      </div>
    );
  };

  export default UploadFile