import React, { useState } from 'react'

import './AdminTable.css'

import SideMenu from '../../components/SideMenu'
import Table from '../../components/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AdminTable = () => {
    const [tables, setTables] = useState([
        {
            'id': '01',
            'number': '01'
        },
        {
            'id': '02',
            'number': '02'
        },
        {
            'id': '03',
            'number': '03'
        },
        {
            'id': '04',
            'number': '04'
        },
        {
            'id': '05',
            'number': '05'
        },
        {
            'id': '06',
            'number': '06'
        },
        {
            'id': '07',
            'number': '07'
        },
        {
            'id': '08',
            'number': '08'
        },
        {
            'id': '09',
            'number': '09'
        },
        {
            'id': '10',
            'number': '10'
        },
        {
            'id': '11',
            'number': '11'
        },
        {
            'id': '12',
            'number': '12'
        }
    ])
  return (
    <div className='admin-table'>
        <SideMenu page='mesas'/>
        <aside className='admin-table-board'>
            <Row className='d-flex w-100'>
                {tables && tables.map((table) => (
                                <Col className='col-12 col-md-6 col-lg-3 mb-3'
                                     key={table.id}>
                                    <Table table={table}/>
                                </Col>
                ))}
            </Row>
        </aside>
    </div>
  )
}

export default AdminTable