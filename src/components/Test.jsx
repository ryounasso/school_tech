import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
import { useTable, useSortBy } from "react-table"

export const Test = (props) => {
  console.log(props);
  const problem = props.props;

  function DataTable() {
    const data = React.useMemo(
      () => [
        {
          createdAt: problem.createdAt.toLocaleString(),
          problem: problem.problem,
          choice: [`${problem.choiceA}　`, `${problem.choiceB}　`, `${problem.choiceC}　`, `${problem.choiceD}　`],
          result: problem.result,
        },
      ],
      [],
    )
  
    const columns = React.useMemo(
      () => [
        {
          Header: "作成日",
          accessor: "createdAt",
        },
        {
          Header: "問題文",
          accessor: "problem",
        },
        {
          Header: "選択肢",
          accessor: "choice",
        },
        {
          Header: "解答",
          accessor: "result",
        },
      ],
      [],
    )
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data }, useSortBy)
  
    return (
      <>
        <Table {...getTableProps()}>
            <Thead>
            {headerGroups.map((headerGroup) => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                    <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isNumeric={column.isNumeric}
                    >
                    {column.render("Header")}
                    </Th>
                ))}
                </Tr>
            ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row)
                return (
                <Tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                    <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                        {cell.render("Cell")}
                    </Td>
                    ))}
                </Tr>
                )
            })}
            </Tbody>
        </Table>
      </>
    )
  };

  return (
    <>
      {DataTable()}
    </>
  );
}
