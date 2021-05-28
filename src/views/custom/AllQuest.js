import { CDataTable, CButton } from '@coreui/react'
import React from 'react'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'

export default function AllQuest() {

	const usersData = [
		{id: 0, uploaded_dates: '22-05-2021', no_attempts: '5',accurate_attempts: '2', accuracy: '50%', level: 'beginner',plan: 'Plan A'},
		{id: 0, uploaded_dates: '22-05-2021', no_attempts: '5',accurate_attempts: '2', accuracy: '50%', level: 'beginner',plan: 'Plan A'},
		{id: 0, uploaded_dates: '22-05-2021', no_attempts: '5',accurate_attempts: '2', accuracy: '50%', level: 'beginner',plan: 'Plan A'},
		{id: 0, uploaded_dates: '22-05-2021', no_attempts: '5',accurate_attempts: '2', accuracy: '50%', level: 'beginner',plan: 'Plan A'},
		{id: 0, uploaded_dates: '22-05-2021', no_attempts: '5',accurate_attempts: '2', accuracy: '50%', level: 'beginner',plan: 'Plan A'},
		{id: 0, uploaded_dates: '22-05-2021', no_attempts: '5',accurate_attempts: '2', accuracy: '50%', level: 'beginner',plan: 'Plan A'},
		{id: 0, uploaded_dates: '22-05-2021', no_attempts: '5',accurate_attempts: '2', accuracy: '50%', level: 'beginner',plan: 'Plan A'},
		{id: 0, uploaded_dates: '22-05-2021', no_attempts: '5',accurate_attempts: '2', accuracy: '50%', level: 'beginner',plan: 'Plan A'},
		{id: 0, uploaded_dates: '22-05-2021', no_attempts: '5',accurate_attempts: '2', accuracy: '50%', level: 'beginner',plan: 'Plan A'},
		{id: 0, uploaded_dates: '22-05-2021', no_attempts: '5',accurate_attempts: '2', accuracy: '50%', level: 'beginner',plan: 'Plan A'},
		{id: 0, uploaded_dates: '22-05-2021', no_attempts: '5',accurate_attempts: '2', accuracy: '50%', level: 'beginner',plan: 'Plan A'},
		{id: 0, uploaded_dates: '22-05-2021', no_attempts: '5',accurate_attempts: '2', accuracy: '50%', level: 'beginner',plan: 'Plan A'},
		{id: 0, uploaded_dates: '22-05-2021', no_attempts: '5',accurate_attempts: '2', accuracy: '50%', level: 'beginner',plan: 'Plan A'},
		{id: 0, uploaded_dates: '22-05-2021', no_attempts: '5',accurate_attempts: '2', accuracy: '50%', level: 'beginner',plan: 'Plan A'},
		
	  ]


	const fields = [
		{key: 'id'},
		{ key: 'uploaded_dates',_style:{width: "185px"} },
		{key:'no_attempts', _style:{width: "55px", textAlign: ''}, label: "No. of attempts" },
		{ key: 'accurate_attempts',_style:{width: "55px", textAlign: ''}  },
		{ key: 'accuracy'  },
		'level',
		'plan',
		{key: 'delete',label: '',sorter: false,
		filter: false }
	  ]

	  
	return (
		<div className="card px-3">
			<div className="card-header d-flex justify-content-between ">
				<h4 className="mb-0 card-title">All Questions </h4> 
				<Link className="btn btn-info " to="/add-quest">Add New</Link>
			</div>
			<CDataTable
			items={usersData}
			fields={fields}
			
			tableFilter
			
			itemsPerPageSelect
			itemsPerPage={5}
			hover
			sorter
			pagination
			scopedSlots = {{
				'delete':
				(item)=>(
					<td>
						<CButton size="sm" variant="outline" color="danger">
							<CIcon size={'sm'} name={'cilSettings'} />
						</CButton>
					
					</td>
				),
				
			}}
			/>
		
		</div>
	)
}
