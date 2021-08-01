import React, { useContext } from 'react'
import { BookContext } from './BookContext'
import { Table } from 'react-bootstrap'

function Books() {

    const { books } = useContext(BookContext);

    return (
        <div className="books">
            <Table striped bordered hover className="book-table" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Book Name</th>
                        <th>Price</th>

                    </tr>
                </thead>
                <tbody>
                    {books && books.map((book, key) => (
                        <tr key={key}>
                            <td>{book.id}</td>
                            <td>{book.name} </td>
                            <td>{book.price} </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Books
