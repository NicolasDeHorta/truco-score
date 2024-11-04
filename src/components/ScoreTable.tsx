import React from "react";
import EditIcon from "@/assets/icon-edit.svg"
import TrashIcon from "@/assets/icon-trash.svg"
import Image from "next/image";

interface ScoreTableProps {
  scoresList: { Nos: number; Ellos: number }[];
  onEditScore: (index: number) => void;
  onDeleteScore: (index: number) => void;
  onResetScores: () => void;
}

const ScoreTable = ({ scoresList, onEditScore, onDeleteScore, onResetScores }: ScoreTableProps) => {
  let totalNos = 0;
  let totalEllos = 0;

  const handleEditClick = (index: number) => {
    onEditScore(index);
  };

  const handleDeleteClick = (index: number) => {
    onDeleteScore(index);
  };

  return (
    <div className="mt-4 relative overflow-hidden h-full flex flex-col">
      <table className="table-auto w-full">
        <thead className="sticky top-0">
          <tr>
            <th className="w-1/3 px-4 py-2">Nos</th>
            <th className="w-1/3 px-4 py-2">Ellos</th>
            <th className="w-1/3 px-4 py-2"></th>
          </tr>
        </thead>
      </table>
      
      {/* Scrollable Table Body */}
      <div className="overflow-y-auto flex-grow">
        <table className="table-auto w-full">
          <tbody>
            {scoresList.map((scores, index) => {
              totalNos += scores.Nos;
              totalEllos += scores.Ellos;

              return (
                <tr key={index}>
                  <td className="w-1/3 px-4 py-2 text-center">{scores.Nos}</td>
                  <td className="w-1/3 px-4 py-2 border-r border-orange-700 text-center">{scores.Ellos}</td>
                  <td className="w-1/3 px-4 py-2 text-center">
                    <button onClick={() => handleEditClick(index)} className="text-blue-500 mr-4">
                      <Image src={EditIcon} width={20} height={20} alt="edit"/>
                    </button>
                    <button onClick={() => handleDeleteClick(index)} className="text-red-500">
                    <Image src={TrashIcon} width={20} height={20} alt="delete"/>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <table className="table-fixed w-full my-4">
        <tfoot>
          <tr>
            <th className="w-1/3 px-4 py-2 border-t border-orange-800">{totalNos}</th>
            <th className="w-1/3 px-4 py-2 border-t border-orange-800">{totalEllos}</th>
            <th className="w-1/3 px-4 py-2 border-t border-orange-800">
              <button onClick={onResetScores} className="text-red-500 shadow-black drop-shadow-md">
                Reset
              </button>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ScoreTable;
