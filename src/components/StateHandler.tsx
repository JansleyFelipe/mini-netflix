interface StateHandlerProps {
  loading: boolean;
  error: string | null;
  children: React.ReactNode;
}

export default function StateHandler({
  loading,
  error,
  children,
}: StateHandlerProps) {
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Error Loading Movie</h1>
        <p className="text-gray-400 mb-4">{error}</p>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          Go Back to Home
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
