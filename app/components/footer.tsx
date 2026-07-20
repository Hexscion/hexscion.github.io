import { LinkedinIcon } from "@/components/icons/simple-icons-linkedin";
import { CodepenIcon } from "@/components/icons/simple-icons-codepen";
import { GithubIcon } from "@/components/icons/simple-icons-github";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-accent text-center py-20 text-lg mt-auto w-full">
      <a 
        href="mailto:aldrickrasquinha@gmail.com" 
        className="font-bold hover:underline hover:opacity-85 transition-opacity"
      >
        aldrickrasquinha@gmail.com
      </a>
      
      <ul className="flex justify-center gap-4 mt-8 list-none p-0">
        <li>
          <a 
            className="p-2 text-accent hover:opacity-75 transition-opacity" 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/aldrickrasquinha/"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="inline-block" size={24} strokeWidth={0} fill="currentColor" />
          </a>
        </li>
        <li>
          <a 
            className="p-2 text-accent hover:opacity-75 transition-opacity" 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://codepen.io/Hexscion"
            aria-label="CodePen"
          >
            <CodepenIcon className="inline-block" size={24} strokeWidth={0} fill="currentColor" />
          </a>
        </li>
        <li>
          <a 
            className="p-2 text-accent hover:opacity-75 transition-opacity" 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://github.com/Hexscion"
            aria-label="GitHub"
          >
            <GithubIcon className="inline-block" size={24} strokeWidth={0} fill="currentColor" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
