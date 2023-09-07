import React from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import {useSelector} from 'react-redux';
import WithTableComponent from '../../hoc/WithTableComponent';
import ButtonComponent from './ButtonComponent';

const TableComponent = ({deleteBirthday, sortBirthdays}) => {

    const birthdays = useSelector((state) =>state.birthDay.birthdays);
    const sortBy = useSelector((state) => state.birthDay.sortBy);
    const sortOrder = useSelector((state) => state.birthDay.sortOrder);
    
    const handleDelete = (name,id) => {
        if(name === 'delete')
            deleteBirthday(id);
    };

    const handleSort = (sortByValue) => {
        let sortOrderValue = 'asc';
        if (sortBy === sortByValue && sortOrder === 'asc') {
        sortOrderValue = 'desc';
        }
        sortBirthdays(sortByValue, sortOrderValue);
    };

    const sortedBirthdays = [...birthdays].sort((a, b) => {
        let comparison = 0;
        if (a[sortBy] > b[sortBy]) {
          comparison = 1;
        } else if (a[sortBy] < b[sortBy]) {
          comparison = -1;
        }
    
        return comparison;
      });

    return(
        <div>
            <Row lg={12}>
                <Col lg={6}>
                    <Table striped bordered hover >
                        <thead>
                            <tr >
                                <th style={{padding :'.5rem 5rem'}} onClick={() => handleSort('name')}>Name</th>
                                <th style={{padding :'.5rem 5rem'}} onClick={() => handleSort('date')}>Date</th>
                                <th style={{padding :'.5rem 5rem'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedBirthdays.map((birthday) => (
                                <tr key={birthday.id}>
                                    <td>{birthday.name}</td>
                                    <td>{birthday.date}</td>
                                    <td>
                                        <ButtonComponent ButtonName='delete' ButtonText='Delete' variant='danger' id={birthday.id} btnClick={handleDelete}/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    </Col>
            </Row>
        </div>
    )
}

export default WithTableComponent(TableComponent);