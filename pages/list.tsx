import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Link from "next/link";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useRouter } from "next/router";

const ListTable = () => {

    const { push } = useRouter();

    const createData = (user: string, name: string) => {
        return { user, name }
    }

    const rows = [
        createData('hiaguedes', 'Hiago'),
        createData('leorcvargas', 'Hiago'),
        createData('esin', 'Hiago'),
        createData('tsilva89', 'Hiago'),
        createData('MateusSValente', 'Hiago'),
    ]

    return (
        <>
            <Button onClick={() => push('/')}>
                <ChevronLeftIcon />
            </Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>user</TableCell>
                        <TableCell>name</TableCell>
                        <TableCell>profile Link</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell>{row.user}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell><Link href={`/?query=${row.user}`}>{row.user}</Link></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

            </Table>
        </>
    )
}

export default ListTable