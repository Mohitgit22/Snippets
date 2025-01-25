"use client";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-2">
        {/* First Line */}
        <div className="text-base font-medium">
          &copy; {new Date().getFullYear()} SnippetStack. All rights reserved.
        </div>

        {/* Second Line */}
        <div className="text-sm">
          About | Contact | Privacy | Terms
        </div>
      </div>
    </footer>
  );
};

export default Footer;
