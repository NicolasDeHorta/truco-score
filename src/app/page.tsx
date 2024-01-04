"use client";
import { useEffect, useState } from "react";
import ScoreTable from "../components/ScoreTable";
import ScoreModal from "../components/ScoreModal";
import ScoreSquares from "@/components/ScoreSquares";
import { getScoreData, saveScoreData } from "@/utils";

interface ScoreType {
  Nos: number;
  Ellos: number;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [squareMode, setSquareMode] = useState(false);
  const [scoresList, setScoresList] = useState<ScoreType[]>([]);
  const [loading, setLoading] = useState(true);

  const [editIndex, setEditIndex] = useState<number | null>(null);

  const loadInitialData = async () => {
    const scoreData = await getScoreData();
    if (scoreData) setScoresList(scoreData);
    setLoading(false);
  };
  useEffect(() => {
    if (scoresList.length > 0) saveScoreData(scoresList);
  }, [scoresList]);

  useEffect(() => {
    loadInitialData();
  }, []);

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
    const confirmDelete = window.confirm("¿Estás seguro?");
    if (confirmDelete) {
      const updatedScoresList = scoresList.filter((_, i) => i !== index);
      setScoresList(updatedScoresList);
      if (updatedScoresList.length == 0) saveScoreData([]);
    }
  };

  const handleSquareModeToggle = () => {
    setSquareMode((p) => !p);
  };

  const handleResetScores = () => {
    const confirmDelete = window.confirm("¿Estás seguro?");
    if (confirmDelete) {
      setScoresList([]);
      saveScoreData([]);
    }
  };

  return (
    <div className="flex text-white bg-black flex-col justify-between items-center relative" style={{ minHeight: "90vh" }}>
      {loading && <div className="h-screen flex justify-center items-center">Cargando datos previos...</div>}
      {!loading && (
        <>
          <div className="flex flex-col justify-center m-5 items-center">
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
        </>
      )}

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
