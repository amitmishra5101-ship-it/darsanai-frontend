 
"use client";

import { useState, useEffect } from "react";

export default function VoiceStudio() {
  const [voices, setVoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    async function fetchVoices() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(${apiUrl}/api/voice/list);
        if (!response.ok) throw new Error("Failed to fetch voices");
        const data = await response.json();
        setVoices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchVoices();
  }, []);

  if (loading) {
    return (
      <div className="p-8 text-center text-white">
        Loading voices...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-400">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-2">Voice Studio</h1>
      <p className="text-gray-400 mb-8">
        Choose a voice for your videos. {voices.length} voices available.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {voices.map((voice) => (
          <div
            key={voice.voice_id}
            onClick={() => setSelectedVoice(voice)}
            className={`p-4 rounded-lg cursor-pointer transition-all border-2 ${
              selectedVoice?.voice_id === voice.voice_id
                ? "border-yellow-400 bg-yellow-400/10"
                : "border-gray-700 bg-gray-800 hover:border-gray-500"
            }`}
          >
            <h3 className="text-white font-semibold mb-1">{voice.name}</h3>
            <p className="text-sm text-gray-400 mb-3">
              {voice.labels?.description || voice.category || "Voice"}
            </p>
            {voice.preview_url && (
              <audio controls className="w-full h-8">
                <source src={voice.preview_url} type="audio/mpeg" />
              </audio>
            )}
          </div>
        ))}
      </div>

      {selectedVoice && (
        <div className="mt-8 p-4 bg-yellow-400/10 border border-yellow-400 rounded-lg">
          <p className="text-white">
            Selected: <strong>{selectedVoice.name}</strong>
          </p>
        </div>
      )}
    </div>
  );
}