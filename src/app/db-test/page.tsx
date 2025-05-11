"use client";

import { useState, useEffect } from "react";

export default function DbTestPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testDatabase = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch("/api/test-db");
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || "Unknown error occurred");
      }
      
      setData(result.data);
    } catch (err) {
      setError((err as Error).message);
      console.error("Error testing database:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Prisma Database Test</h1>
      
      <button
        onClick={testDatabase}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300 mb-6"
      >
        {loading ? "Testing..." : "Test Database Connection"}
      </button>
      
      {error && (
        <div className="p-4 mb-6 bg-red-100 border border-red-400 text-red-700 rounded">
          <p className="font-bold">Error:</p>
          <p>{error}</p>
        </div>
      )}
      
      {data && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Test Data Created:</h2>
          <div className="bg-gray-100 p-4 rounded overflow-auto">
            <pre className="text-sm">{JSON.stringify(data, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
