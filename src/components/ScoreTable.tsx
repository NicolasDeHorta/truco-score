import React from "react";

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
    <div className="mt-4">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Nos</th>
            <th className="px-4 py-2">Ellos</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {scoresList.map((scores, index) => {
            totalNos += scores.Nos;
            totalEllos += scores.Ellos;

            return (
              <tr key={index}>
                <td className="border px-4 py-2 border-none text-center">{scores.Nos}</td>
                <td className="border px-4 py-2 border-none text-center">{scores.Ellos}</td>
                <td className="border px-4 py-2 border-none text-center">
                  <button onClick={() => handleEditClick(index)} className="text-blue-500 mr-8">
                    Editar
                  </button>
                  <button onClick={() => handleDeleteClick(index)} className="text-red-500">
                    Borrar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th className="px-4 py-2 border-t">{totalNos}</th>
            <th className="px-4 py-2 border-t">{totalEllos}</th>
            <th className="px-4 py-2 border-t">
              <button onClick={onResetScores} className="text-red-500">
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
