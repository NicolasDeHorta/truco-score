"use client";
import { useEffect, useState } from "react";
import ScoreTable from "../components/ScoreTable";
import ScoreModal from "../components/ScoreModal";
import ScoreSquares from "@/components/ScoreSquares";
import { getScoreData, saveScoreData } from "@/utils";
import SquaresIcon from "@/assets/icon-squares.svg"
import NumbersIcon from "@/assets/icon-numbers.svg"
import PlusIcon from "@/assets/icon-plus.svg"
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex min-h-screen overflow-hidden text-white flex-col items-center relative max-w-sm m-auto">
      {loading && <div className="h-screen flex justify-center items-center">Cargando datos previos...</div>}
      <h1 className="text-3xl font-bold mt-4">Truco</h1>
      <Link href="/rules" className="text-gray-400 font-bold absolute top-2 right-2"> Reglas</Link>
      {!loading && (
        <>
          <div className="flex w-3/4 flex-grow justify-center m-2 items-start overflow-hidden">
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
          <div className="flex flex-row justify-around mb-16 max-w-screen-sm w-full">
            <button onClick={handleSquareModeToggle} className="mt-4 p-3 bg-orange-700 text-white rounded-full">
              {squareMode ?
                <Image src={NumbersIcon} width={20} height={20} alt="tabla" />
                :
                <Image src={SquaresIcon} width={20} height={20} alt="cuadrados" />
              }
            </button>
            <button onClick={handleModalOpen} className="mt-4 p-3 bg-orange-700 text-white rounded-full">
              <Image src={PlusIcon} width={20} height={20} alt="agregar" />
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
