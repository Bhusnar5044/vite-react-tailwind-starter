const Home = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center">
      <div className="grid gap-2.5">
        <h1 className="bg-gradient-to-br from-gray-200 to-teal-700 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
          vite-react-tailwind-starter
        </h1>
        <p className="text-xs text-gray-500 md:text-sm">
          This is a vite react template with TailwindCSS and TypeScript setup.
        </p>
      </div>
    </div>
  );
};

export default Home;
