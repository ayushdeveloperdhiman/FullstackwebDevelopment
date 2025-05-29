import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const passwordRef = useRef();
  const generatePassword = useCallback(() => {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let characters = letters;
    if (includeNumbers) {
      characters += numbers;
    }
    if (includeSymbols) {
      characters += symbols;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
    console.log(generatedPassword);
  }, [length, includeNumbers, includeSymbols]);

  const copyToClipboard = () => {
    passwordRef.current.select();
    navigator.clipboard.writeText(password);
    alert("Pasword copied to clipboard!");
  };
  useEffect(() => {
    generatePassword();
  }, [generatePassword]);
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
          <div className="mb-4">
            <input
              type="text"
              className="bg-white w-full p-2 border mb-2"
              value={password}
              ref={passwordRef}
              readOnly
            />
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={copyToClipboard}
              >
                Copy
              </button>
            </div>
          </div>
          <div>
            <label>
              Length:
              <input
                type="number"
                min={4}
                max={20}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="w-full p-2 border rounded"
              ></input>
            </label>
            <label>
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="mr-2"
              />
              Include Numbers
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="mr-2"
              />
              Include Symbols
            </label>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={generatePassword}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
