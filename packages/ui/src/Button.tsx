export function Button({ children }: { children: string }) {
  return (
    <button className="bg-red-400 p-8 rounded-lg shadow-2xl hover:bg-red-300 hover:animate-pulse">
      {children}
    </button>
  );
}
