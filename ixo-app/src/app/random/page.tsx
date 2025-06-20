'use client';
import { useState } from 'react';

const RandomPage: React.FC = () => {
  const [ inputValue, setInputValue ] = useState<string>('');
  const [ convertedValue, setConvertedValue ] = useState<Array<Array<string>>>([]);
  const [ teams, setTeams ] = useState<Array<Array<string>>>([]);
  const [ teamCount, setTeamCount ] = useState<number>(8);

  const handleSetTeamCount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value < 1) {
      setTeamCount(1);
      return;
    }
    const allMembers = convertedValue.flat();
    const newTeams = Array.from<Array<string>>({ length: value }).map<Array<string>>(() => []);

    allMembers.forEach((member, index) => {
      newTeams[index % value].push(member);
    });

    setTeamCount(value);
    setTeams(newTeams);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const result = event.target.value
      .split(/\n\s*\n/) // Split by empty lines
      .map((section) => {
        const lines = section.split('\n');
        const teamName = lines[0]; // First line is the team name
        const members = lines.slice(1).map((member) => `${member} (${teamName})`); // Append team name to each member
        return members;
      });

    const allMembers = result.flat();
    const newTeams = Array.from<Array<string>>({ length: teamCount }).map<Array<string>>(() => []);

    allMembers.forEach((member, index) => {
      newTeams[index % teamCount].push(member);
    });

    setInputValue(event.target.value);
    setConvertedValue(result);
    setTeams(newTeams);
  };

  const handleReassignTeams = () => {
    const allMembers = convertedValue.flat();
    const newTeams = Array.from<Array<string>>({ length: teamCount }).map<Array<string>>(() => []);

    allMembers.forEach((member, index) => {
      newTeams[index % teamCount].push(member);
    });

    setTeams(newTeams);
  };

  const formatDisplay = (data: Array<Array<string>>, label: string) => {
    return data.map((group, index) => `${label} ${index + 1}: ${group.join(', ')}`).join('\n');
  };

  return (
    <div className="p-5 font-sans leading-relaxed">
      <h1 className="text-2xl mb-2 text-gray-800">Input Text</h1>
      <textarea
        value={inputValue}
        onChange={handleChange}
        rows={5}
        cols={50}
        placeholder="Enter your text here..."
        className="w-full p-2 text-lg border border-gray-300 rounded mb-2 box-border"
      />
      <label className="block mb-2 text-gray-800">
        Number of Teams:
        <input
          type="number"
          value={teamCount}
          onChange={handleSetTeamCount}
          min={1}
          className="ml-2 p-1 text-lg border border-gray-300 rounded"
        />
      </label>
      <button
        onClick={handleReassignTeams}
        className="mt-2 px-5 py-2 text-lg cursor-pointer bg-blue-500 text-white border-none rounded transition-colors duration-300 hover:bg-blue-700"
      >
        Random
      </button>
      {/* <p className="text-lg mt-5 text-gray-600">String Value:</p>
      <pre className="bg-gray-100 p-2 border border-gray-300 rounded overflow-x-auto text-gray-800">
        {inputValue}
      </pre> */}
      <h2 className="text-xl mt-5 text-gray-800">Converted Value:</h2>
      <pre className="bg-gray-100 p-2 border border-gray-300 rounded overflow-x-auto text-gray-800">
        {formatDisplay(convertedValue, 'Group')}
      </pre>
      <h2 className="text-xl mt-5 text-gray-800">Teams Value:</h2>
      <pre className="bg-gray-100 p-2 border border-gray-300 rounded overflow-x-auto text-gray-800">
        {formatDisplay(teams, 'Team')}
      </pre>
    </div>
  );
};

export default RandomPage;