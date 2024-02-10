const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-muted-foreground">
      <h1 className="text-neutral-100 text-3xl mt-2 mb-4 font-bold">
        Welcome to <span className="text-pink-600">Taskify!</span>
      </h1>
      {children}
    </div>
  );
};

export default ClerkLayout;
