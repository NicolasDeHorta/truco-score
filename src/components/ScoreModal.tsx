"use client";
import React, { useState, useEffect } from "react";

interface ScoreModalProps {
  onClose: () => void;
  onAddScore: (newScores: { Nos: number; Ellos: number }[]) => void;
  scoresList: { Nos: number; Ellos: number }[];
  editIndex?: number | null;
}

const ScoreModal = ({ onClose, onAddScore, scoresList, editIndex }: ScoreModalProps) => {
  const [newScores, setNewScores] = useState<{ Nos: number; Ellos: number }>({
    Nos: 0,
    Ellos: 0,
  });

  useEffect(() => {
    if (editIndex !== null && editIndex !== undefined && editIndex >= 0 && editIndex < scoresList.length) {
      const scoresToEdit = scoresList[editIndex];
      setNewScores(scoresToEdit);
    }
  }, [editIndex, scoresList]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: "Nos" | "Ellos") => {
    setNewScores({
      ...newScores,
      [field]: parseInt(e.target.value) || 0,
    });
  };

  const handleSubmit = () => {
    if (newScores.Ellos == 0 && newScores.Nos == 0) return;
    if (editIndex !== null && editIndex !== undefined) {
      const updatedScoresList = [...scoresList];
      updatedScoresList[editIndex] = newScores;
      onAddScore(updatedScoresList);
    } else {
      const updatedScoresList = [...scoresList, newScores];
      onAddScore(updatedScoresList);
    }

    setNewScores({ Nos: 0, Ellos: 0 });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg mb-40">
        <h2 className="text-lg font-semibold mb-2">Ingresar Puntajes</h2>
        <div className="flex justify-between mb-4 ">
          <div className="flex flex-col justify-between items-center mb-2">
            <label className="mr-2 text-black">Nos:</label>
            <input
              type="number"
              placeholder="0"
              min={0}
              onChange={(e) => handleChange(e, "Nos")}
              className="border rounded-lg p-2 w-16 text-center text-black"
            />
          </div>
          <div className="flex flex-col justify-between items-center mb-2">
            <label className="mr-2 text-black">Ellos:</label>
            <input
              type="number"
              min={0}
              placeholder="0"
              onChange={(e) => handleChange(e, "Ellos")}
              className="border rounded-lg p-2 w-16 text-center text-black"
            />
          </div>
        </div>
        <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded-lg w-full">
          {editIndex !== null ? "Editar" : "Guardar"}
        </button>
        <button onClick={onClose} className="mt-2 bg-red-500 text-white p-2 rounded-lg w-full">
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default ScoreModal;
