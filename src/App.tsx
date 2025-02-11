import React from 'react';
import { Table } from 'lucide-react';

// Table 1 data
const tableData = [
  { index: 'A1', value: 41 },
  { index: 'A2', value: 18 },
  { index: 'A3', value: 21 },
  { index: 'A4', value: 63 },
  { index: 'A5', value: 2 },
  { index: 'A6', value: 53 },
  { index: 'A7', value: 5 },
  { index: 'A8', value: 57 },
  { index: 'A9', value: 60 },
  { index: 'A10', value: 93 },
  { index: 'A11', value: 28 },
  { index: 'A12', value: 3 },
  { index: 'A13', value: 90 },
  { index: 'A14', value: 39 },
  { index: 'A15', value: 80 },
  { index: 'A16', value: 88 },
  { index: 'A17', value: 49 },
  { index: 'A18', value: 60 },
  { index: 'A19', value: 26 },
  { index: 'A20', value: 28 }
];

function App() {
  // Calculate values for Table 2
  const getValueByIndex = (index: string) => 
    tableData.find(item => item.index === index)?.value || 0;

  const alphaValue = getValueByIndex('A5') + getValueByIndex('A20');
  const betaValue = getValueByIndex('A15') / getValueByIndex('A7');
  const charlieValue = getValueByIndex('A13') * getValueByIndex('A12');

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Table className="w-8 h-8 mx-auto text-blue-600 mb-2" />
          <h1 className="text-3xl font-bold text-gray-900">Data Tables</h1>
        </div>

        {/* Table 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Table 1</h2>
          </div>
          <div className="px-6 py-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Index #
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableData.map((row) => (
                  <tr key={row.index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row.index}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Table 2</h2>
          </div>
          <div className="px-6 py-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Alpha
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {alphaValue}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Beta
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {betaValue.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Charlie
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {charlieValue}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;