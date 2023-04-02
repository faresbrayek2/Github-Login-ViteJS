import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] flex justify-center">
      <div className="flex flex-col">
        <div className="flex justify-center pb-7 pt-10">
          <svg
            height="48"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="48"
            data-view-component="true"
            className="text-white fill-current"
          >
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
        </div>
        <h1 className="text-2xl mb-8 text-white text-center">
          Sign in to GitHub
        </h1>

        <div className="bg-[#161b22] p-8 rounded-lg border-[#30363d] shadow-md w-full sm:w-96">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-[#f0f6fc] mb-2">
                Username or email address
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0d1117] p-3 border border-[#30363d] rounded"
              />
            </div>
            <div className="mb-4">
              <label className=" flex justify-between text-[#f0f6fc] mb-2">
                Password
                <a href="/" className="text-blue-500 hover:text-blue-600">
                  Forgot password?
                </a>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-[#0d1117] border border-[#30363d] rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-[#238636] text-white font-semibold rounded hover:bg-[#249990]"
            >
              Sign in
            </button>
          </form>
        </div>
        <div className="mt-4 p-4 rounded-lg border-2 border-[#30363d] text-center bg-[#0d1117]">
          <p className="text-[#f0f6fc]">
            New to GitHub?{" "}
            <a href="/" className="text-blue-500 hover:text-blue-600">
              Create an account
            </a>
            .
          </p>
        </div>
        <div className="flex justify-around pt-16">
          <a href="/" className="text-blue-500 hover:text-blue-600">
            Terms
          </a>{" "}
          <a href="/" className="text-blue-500 hover:text-blue-600">
            Privacy
          </a>{" "}
          <a href="/" className="text-blue-500 hover:text-blue-600">
            Security
          </a>{" "}
          <a
            href="/"
            className="text-gray-500 hover:text-blue-600 hover:underline"
          >
            Contact GitHub
          </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
