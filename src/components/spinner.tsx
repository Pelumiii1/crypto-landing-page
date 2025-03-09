export default function FancySpinner() {
  return (
    <div className="flex justify-center items-center">
      <svg
        className="animate-spin h-12 w-12 text-blue-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
        ></circle>
        <path className="opacity-75" d="M4 12a8 8 0 018-8v8z"></path>
      </svg>
    </div>
  );
}
