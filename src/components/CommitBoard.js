import React from 'react';

const generateCommitData = () => {
    const days = 365;
    const data = [];
    for (let i = 0; i < days; i++) {
        data.push({
            date: new Date(Date.now() - i * 86400000),
            commits: Math.floor(Math.random() * 5), // Random commits between 0-4
        });
    }
    return data.reverse();
};

const CommitBoard = () => {
    const commitData = generateCommitData();

    return (
        <div className="p-4 max-w-md mx-auto">
            <div className="flex flex-wrap gap-1"> {/* Usando flexbox para exibir horizontalmente */}
                {commitData.map((day, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-sm transition-all duration-300 ` +
                            (day.commits === 0
                                ? 'bg-gray-200'
                                : day.commits === 1
                                    ? 'bg-green-100'
                                    : day.commits === 2
                                        ? 'bg-green-300'
                                        : day.commits === 3
                                            ? 'bg-green-500'
                                            : 'bg-green-700')
                        }
                        title={`${day.date.toDateString()}: ${day.commits} commit(s)`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default CommitBoard;
