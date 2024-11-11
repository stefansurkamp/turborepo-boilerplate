export function Button({ children }: { children: string }) {
  return (
    <button className="bg-red-400 p-8 block rounded-lg hover:bg-red-300 hover:animate-pulse">
      {children}
    </button>
  );
}
