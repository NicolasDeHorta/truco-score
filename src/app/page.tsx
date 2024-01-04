"use client";
import { useState } from "react";
import ScoreTable from "../components/ScoreTable";
import ScoreModal from "../components/ScoreModal";
import ScoreSquares from "@/components/ScoreSquares";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [squareMode, setSquareMode] = useState(false);
  const [scoresList, setScoresList] = useState<{ Nos: number; Ellos: number }[]>([]);

  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddScore = (newScoresList: { Nos: number; Ellos: number }[]) => {
    setScoresList(newScoresList);
    setIsModalOpen(false);
    setEditIndex(null);
  };

  const handleEditScore = (index: number) => {
    setEditIndex(index);
    setIsModalOpen(true);
  };

  const handleDeleteScore = (index: number) => {
    const updatedScoresList = scoresList.filter((_, i) => i !== index);
    setScoresList(updatedScoresList);
  };

  const handleSquareModeToggle = () => {
    setSquareMode((p) => !p);
  };

  const handleResetScores = () => {
    setScoresList([]);
  };

  return (
    <div className="flex flex-col justify-between items-center relative" style={{minHeight: "90vh"}}>
      <div className="flex flex-col jsutify-center m-5 items-center">
      <h1 className="text-3xl font-bold mb-4">Truco</h1>
      {squareMode ? (
        <ScoreSquares scoresList={scoresList} />
      ) : (
        <ScoreTable
          scoresList={scoresList}
          onEditScore={handleEditScore}
          onDeleteScore={handleDeleteScore}
          onResetScores={handleResetScores}
        />
      )}
      </div>
      <div className="w-full flex flex-row justify-around mb-4 absolute bottom-0 ">
        <button onClick={handleSquareModeToggle} className="mt-4 p-1 bg-green-700 text-white rounded-lg">
          {squareMode ? "Ver Tabla" : "Ver Cuadrados"}
        </button>
        <button onClick={handleModalOpen} className="mt-4 p-1 bg-green-700 text-white rounded-lg">
          + Agregar +
        </button>
      </div>

      {isModalOpen && (
        <ScoreModal
          onClose={handleModalClose}
          onAddScore={handleAddScore}
          scoresList={scoresList}
          editIndex={editIndex}
        />
      )}
    </div>
  );
}
