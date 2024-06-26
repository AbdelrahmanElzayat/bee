import { FormGroup } from "react-bootstrap";
import "./CommonForm.css";
import { useState } from "react";
const CommonForm = () => {
  const [countryCode, setCountryCode] = useState("+1"); // Default country code

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedName, setSelectedName] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setSelectedName(file.name);
    // Additional validation logic
  };
  console.log(selectedFile);
  return (
    <div className="CommonForm">
      <form onSubmit={(e) => e.preventDefault()}>
        <FormGroup className="formGroup">
          <label>Name*</label>
          <input type="text" placeholder="Your Name" />
        </FormGroup>
        <FormGroup className="formGroup">
          <label>Email*</label>
          <input type="email" placeholder="Your email" />
        </FormGroup>
        <FormGroup className="formGroup">
          <label>Phone*</label>
          <div className="formGroupPhone">
            <select value={countryCode} onChange={handleCountryCodeChange}>
              <option value="+1">+1</option>
              <option value="+91">+91</option>
              {/* Add more country codes as needed */}
            </select>
            <input type="number" placeholder="Your phone" />
          </div>
        </FormGroup>
        <FormGroup className="formGroup">
          <label>possion*</label>
          <input type="text" placeholder="Your possion" />
        </FormGroup>
        <FormGroup className="formGroup">
          <label>C V*</label>
          <div className="file-upload">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="69"
              height="60"
              viewBox="0 0 69 60"
              fill="none"
            >
              <path
                d="M36.1364 14.7458L36.2287 14.7733L36.2327 14.7688C36.6703 14.8481 37.1045 14.586 37.2331 14.1519C38.4047 10.2152 42.0958 7.46504 46.2082 7.46504C46.6951 7.46504 47.09 7.07016 47.09 6.5833C47.09 6.09643 46.6951 5.70156 46.2082 5.70156C41.1541 5.70156 36.9069 9.06665 35.5432 13.6493C35.404 14.1162 35.6699 14.6067 36.1364 14.7458Z"
                fill="#FBB033"
                stroke="#F9FFF9"
                strokeWidth="0.3"
              />
              <path
                d="M56.4522 42.4384H52.0618C51.6578 42.4384 51.3301 42.1107 51.3301 41.7067C51.3301 41.3027 51.6578 40.9749 52.0618 40.9749H56.4522C62.504 40.9749 67.4281 36.0509 67.4281 29.999C67.4281 23.9471 62.504 19.023 56.4522 19.023H56.3466C56.1344 19.023 55.9326 18.9311 55.7936 18.7706C55.6546 18.6101 55.5918 18.3974 55.6222 18.1873C55.6875 17.7315 55.7204 17.2737 55.7204 16.8279C55.7204 11.5829 51.4528 7.31531 46.2079 7.31531C44.1674 7.31531 42.2215 7.95296 40.5803 9.15978C40.2196 9.42478 39.7074 9.30718 39.4989 8.91047C34.8509 0.0596993 22.7107 -1.12887 16.4166 6.57053C13.7652 9.81417 12.7234 14.0336 13.5582 18.146C13.6502 18.6002 13.3026 19.0236 12.8411 19.0236H12.5479C6.496 19.0236 1.57193 23.9477 1.57193 29.9996C1.57193 36.0514 6.496 40.9755 12.5479 40.9755H16.9382C17.3422 40.9755 17.6699 41.3032 17.6699 41.7072C17.6699 42.1113 17.3422 42.439 16.9382 42.439H12.5479C5.6889 42.439 0.108398 36.8585 0.108398 29.9995C0.108398 23.3329 5.37995 17.8742 11.9735 17.5731C11.3541 13.3066 12.5385 9.00295 15.2835 5.64437C22.0222 -2.5996 34.9364 -1.67556 40.3955 7.51707C42.1371 6.42522 44.1299 5.85244 46.2076 5.85244C52.5622 5.85244 57.5976 11.261 57.157 17.58C63.6897 17.9463 68.8913 23.3763 68.8913 29.999C68.8913 36.8585 63.3108 42.4384 56.4518 42.4384L56.4522 42.4384Z"
                fill="#FBB033"
              />
              <path
                d="M15.9584 41.2935C15.9584 51.4634 24.2321 59.737 34.4019 59.737C44.5718 59.737 52.8454 51.4633 52.8454 41.2935C52.8454 31.1235 44.5718 22.85 34.4019 22.85C24.2319 22.85 15.9584 31.1237 15.9584 41.2935ZM17.7222 41.2935C17.7222 32.0966 25.2048 24.6138 34.4019 24.6138C43.5988 24.6138 51.0816 32.0964 51.0816 41.2935C51.0816 50.4904 43.5988 57.9732 34.4019 57.9732C25.205 57.9732 17.7222 50.4905 17.7222 41.2935Z"
                fill="#FBB033"
                stroke="#F9FFF9"
                strokeWidth="0.3"
              />
              <path
                d="M34.0512 48.6577C34.0512 49.0363 34.3583 49.3434 34.7369 49.3434C35.1154 49.3434 35.4226 49.0367 35.4226 48.6577V34.7291C35.4226 34.3504 35.1155 34.0434 34.7369 34.0434C34.3582 34.0434 34.0512 34.3504 34.0512 34.7291V48.6577Z"
                fill="#FBB033"
                stroke="#FBB033"
                strokeWidth="0.3"
              />
              <path
                d="M34.7365 35.7001L30.9358 39.5008L34.7365 35.7001ZM34.7365 35.7001L38.5373 39.5009C38.671 39.6346 38.847 39.7017 39.0221 39.7017L34.7365 35.7001ZM29.966 39.5009C30.2338 39.7687 30.6681 39.7689 30.9357 39.5009L39.0222 39.7017C39.197 39.7017 39.3731 39.6352 39.5071 39.5009C39.7749 39.233 39.7749 38.799 39.507 38.5311L35.2214 34.2455C34.9536 33.9777 34.5192 33.9775 34.2516 34.2455C34.2516 34.2455 34.2515 34.2456 34.2515 34.2456L29.966 38.5311C29.6981 38.799 29.6981 39.233 29.966 39.5009Z"
                fill="#FBB033"
                stroke="#FBB033"
                strokeWidth="0.3"
              />
            </svg>
            <h3>
              {selectedName ? selectedName : "Drag & drop files or "}
              <span
                dangerouslySetInnerHTML={{
                  __html: "Browse",
                }}
              ></span>
            </h3>
            <p>
              Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
            </p>
            <input type="file" onChange={handleFileChange} />
          </div>
        </FormGroup>
        <button type="submit" className="submitBtn">Submit</button>
      </form>
    </div>
  );
};

export default CommonForm;
