import { useState, useEffect } from "react";

interface UsernameModalProps {
  onSubmit: (username: string) => void;
}

export function UsernameModal({ onSubmit }: UsernameModalProps) {
  const [username, setUsername] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem("mist-username", username.trim());
      onSubmit(username.trim());
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-paper border border-border rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-bold mb-4">What's your name?</h2>
        <p className="text-sm text-muted mb-4">
          Your name will appear to collaborators when you edit.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
            className="w-full px-3 py-2 border border-border rounded bg-ink text-paper placeholder-muted focus:outline-none focus:ring-2 focus:ring-chartreuse mb-4"
          />
          <button
            type="submit"
            disabled={!username.trim()}
            className="w-full px-4 py-2 bg-chartreuse text-ink font-medium rounded hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

