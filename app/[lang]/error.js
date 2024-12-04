"use client";

const ErrorComponent = ({ error }) => {
  return (
    <div className="container py-10 mx-auto">
      {error?.message || error?.status}
    </div>
  );
};

export default ErrorComponent;
