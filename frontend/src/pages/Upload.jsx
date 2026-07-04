import { useState } from "react";
import { useNavigate } from "react-router-dom";

import UploadCard from "../components/upload/UploadCard";
import UploadButton from "../components/upload/UploadButton";
import UploadProgress from "../components/upload/UploadProgress";

function Upload() {
  const navigate = useNavigate();

  const [images, setImages] = useState({
    front: null,
    left: null,
    right: null,
  });

  const handleImageChange = (key, file) => {
    if (!file) return;

    setImages((prev) => ({
      ...prev,
      [key]: file,
    }));
  };

  const uploadedCount = Object.values(images).filter(Boolean).length;
  const allSelected = uploadedCount === 3;

  const handleAnalyze = () => {
    if (!allSelected) return;

    console.log("Sending images...");

    // Later this will call Arun's backend.
    // For now, just move to the loading page.
    navigate("/loading");
  };

  return (
    <div className="py-6 sm:py-8">
      <div className="mb-8 max-w-3xl">
        <h1 className="text-3xl font-semibold text-slate-800">
          Upload facial images
        </h1>

        <p className="mt-2 text-slate-600">
          Add a front, left-profile and right-profile image to prepare your
          facial analysis request.
        </p>
      </div>

      <UploadProgress uploadedCount={uploadedCount} />

      <div className="grid gap-6 xl:grid-cols-3 lg:grid-cols-2">
        <UploadCard
          title="Front Face"
          description="Upload a clear front-facing photo."
          image={images.front}
          onImageChange={(file) => handleImageChange("front", file)}
        />

        <UploadCard
          title="Left Profile"
          description="Upload a clear left-side profile photo."
          image={images.left}
          onImageChange={(file) => handleImageChange("left", file)}
        />

        <UploadCard
          title="Right Profile"
          description="Upload a clear right-side profile photo."
          image={images.right}
          onImageChange={(file) => handleImageChange("right", file)}
        />
      </div>

      <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-slate-800">
            Ready to analyze?
          </p>

          <p className="text-sm text-slate-600">
            {allSelected
              ? "All three images are selected and ready."
              : "Please upload all three images to enable analysis."}
          </p>
        </div>

        <UploadButton
          label="Analyze Face"
          disabled={!allSelected}
          onClick={handleAnalyze}
        />
      </div>
    </div>
  );
}

export default Upload;