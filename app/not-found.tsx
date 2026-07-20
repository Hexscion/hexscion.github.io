import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-28 px-6 max-w-[800px] mx-auto min-h-[70vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl sm:text-5xl font-bold font-sans text-dark mb-4">Oh no!!</h1>
      <p className="text-lg sm:text-xl text-dark/75 max-w-[490px] mx-auto leading-relaxed mb-8">
        You’re either misspelling the URL or requesting a page that's no longer here.
      </p>
      
      <div className="error-container select-none">
        <span className="four">
          <span className="sr-only">4</span>
        </span>
        <span className="zero">
          <span className="sr-only">0</span>
        </span>
        <span className="four">
          <span className="sr-only">4</span>
        </span>
      </div>
      
      <div className="mt-8">
        <Link 
          href="/" 
          className="uppercase text-xs sm:text-sm font-semibold tracking-wider bg-accent text-light py-3.5 px-8 hover:bg-dark transition-colors shadow-custom no-underline rounded"
        >
          Go to homepage
        </Link>
      </div>
    </div>
  );
}
