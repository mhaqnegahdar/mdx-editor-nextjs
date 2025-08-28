// Simple Footer Component
export default function Footer() {
  return (
    <footer className=" mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm text-gray-600">
          <p>
            Built with Next.js and MDX by{" "}
            <a
              href="https://github.com/mhaqnegahdar"
              className="text-green-600 hover:text-green-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mohamad
            </a>
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} - Open source blog for learning MDX
          </p>
        </div>
      </div>
    </footer>
  );
}
