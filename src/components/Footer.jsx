import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="p-5 border-t-2 -mr-4 -ml-4 border-gray-100">
      <div className="flex justify-center items-center">
        <p className="font-nunito font-light text-gray-500">
          Copyright&copy; All Right Reserved PangkasPro {currentYear}
        </p>
      </div>
    </footer>
  );
}
