"use client ";
export default function SearchCompoent() {
  return (
    <div className="flex justify-center w-full items-center border-2 p-2">
      <input
        type="text"
        className="p-3 w-1/1 border-2 border-gray-300 rounded-lg outline-none"
        placeholder="Search anything you want"
      />
    </div>
  );
}
