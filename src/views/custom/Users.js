import React from 'react'
import {
	CBadge,
	CCard,
	CCardBody,
	CCardHeader,
	CCol,
	CDataTable,
	CRow,
	CPagination,
	CCollapse,
	CButton
  } from '@coreui/react'
import CIcon from '@coreui/icons-react'

export default function Users() {

	const usersData = [
		{id: 0, name: 'John Doe', registered: '2018/01/01', role: 'Guest', status: 'New', email: "test@gmail.com", last_login: '28-12-1998', no_of_logins: 6},
		{id: 1, name: 'Samppa Nori', registered: '2018/01/01', role: 'Member', status: 'Online', email: "test@gmail.com", last_login: '28-12-1998', no_of_logins: 6},
		{id: 2, name: 'Estavan Lykos', registered: '2018/02/01', role: 'Admin', status: 'offline', email: "test@gmail.com", last_login: '28-12-1998', no_of_logins: 6},
		{id: 3, name: 'Chetan Mohamed', registered: '2018/02/01', role: 'Admin', status: 'deleted', email: "test@gmail.com", last_login: '28-12-1998', no_of_logins: 6},
		{id: 4, name: 'Derick Maximinus', registered: '2018/03/01', role: 'Member', status: 'Online', email: "test@gmail.com", last_login: '28-12-1998', no_of_logins: 6},
		{id: 5, name: 'Friderik Dávid', registered: '2018/01/21', role: 'Staff', status: 'offline', email: "test@gmail.com", last_login: '28-12-1998', no_of_logins: 6},
	]

	const getBadge = status => {
		switch (status) {
		  case 'Online': return 'success'
		  case 'deleted': return 'secondary'
		  case 'New': return 'warning'
		  case 'offline': return 'danger'
		  default: return 'primary'
		}
	  }

	const [details, setDetails] = React.useState([])

	const toggleDetails = (index) => {
		const position = details.indexOf(index)
		let newDetails = details.slice()
		if (position !== -1) {
		newDetails.splice(position, 1)
		} else {
		newDetails = [...details, index]
		}
		setDetails(newDetails)
	}

	const fields = [
		'id',
		'name',
		'registered',
		'role',
		'status',
		'last_login', 
		{key: 'email', sorter: false},
		{key: 'no_of_logins', label: 'No of Login', _style:{width: "80px"}},
		{
			key: 'show_details',
			label: '',
			_style: { width: '1%' },
			sorter: false,
			filter: false
		  }


	]
	return (
		<div>
			<CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            Users
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={usersData}
            fields={fields}
            hover
            striped
			sorter
			pagination
			tableFilter
            itemsPerPage={5}
            clickableRows
            scopedSlots = {{
              'status':
                (item)=>(
                  <td>
					<CBadge color={getBadge(item.status)}>
						{item.status}
					</CBadge>
                  </td>
                ),
              'no_of_logins':
                (item)=>(
                  <td className="text-right">
					{item.no_of_logins	}
                  </td>
                ),
				'show_details':
				(item, index)=>{
				  return (
					<td className="py-2">
					  <CButton
						color="primary"
						variant="outline"
						shape="square"
						size="sm"
						onClick={()=>{toggleDetails(index)}}
					  >
						{details.includes(index) ? 'Hide' : 'Show'}
					  </CButton>
					</td>
					)
				},
			  'details':
				  (item, index)=>{
					return (
					<CCollapse show={details.includes(index)}>
					  <CCardBody>
						<h4>
						  {item.name}
						</h4>
						<p className="text-muted">User since: {item.registered}</p>
						<CButton size="sm" color="info">
						  User Settings
						</CButton>
						<CButton size="sm" color="danger" className="ml-1">
						  Delete
						</CButton>
					  </CCardBody>
					</CCollapse>
				  )
				}
            }}
          />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
		</div>
	)
}
