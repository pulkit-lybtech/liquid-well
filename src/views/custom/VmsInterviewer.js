import { CBadge, CButton, CCardBody, CCollapse, CDataTable } from '@coreui/react'
import React from 'react'

export default function VmsInterviewer() {
	
	// const [items, setItems] = useState(usersData)
  
	const usersData = [
		{
			id: 1, interviewer_name: "Rajesh Kumar k", date_joined: "22/21/21", country: "India", last_active: "3 Days Ago", no_of_interview: 9, 
		},
		{
			id: 1, interviewer_name: "Rajesh Kumar k", date_joined: "22/21/21", country: "India", last_active: "3 Days Ago", no_of_interview: 9, 
		},
		{
			id: 1, interviewer_name: "Rajesh Kumar k", date_joined: "22/21/21", country: "India", last_active: "3 Days Ago", no_of_interview: 9, 
		},
		{
			id: 1, interviewer_name: "Rajesh Kumar k", date_joined: "22/21/21", country: "India", last_active: "3 Days Ago", no_of_interview: 9, 
		},
		{
			id: 1, interviewer_name: "Rajesh Kumar k", date_joined: "22/21/21", country: "India", last_active: "3 Days Ago", no_of_interview: 9, 
		},
		{
			id: 1, interviewer_name: "Rajesh Kumar k", date_joined: "22/21/21", country: "India", last_active: "3 Days Ago", no_of_interview: 9, 
		},
		{
			id: 1, interviewer_name: "Rajesh Kumar k", date_joined: "22/21/21", country: "India", last_active: "3 Days Ago", no_of_interview: 9, 
		},
		{
			id: 1, interviewer_name: "Rajesh Kumar k", date_joined: "22/21/21", country: "India", last_active: "3 Days Ago", no_of_interview: 9, 
		},
		{
			id: 1, interviewer_name: "Rajesh Kumar k", date_joined: "22/21/21", country: "India", last_active: "3 Days Ago", no_of_interview: 9, 
		},
		{
			id: 1, interviewer_name: "Rajesh Kumar k", date_joined: "22/21/21", country: "India", last_active: "3 Days Ago", no_of_interview: 9, 
		},
		{
			id: 1, interviewer_name: "Rajesh Kumar k", date_joined: "22/21/21", country: "India", last_active: "3 Days Ago", no_of_interview: 9, 
		},
	]
  
  
	const fields = [
		'id',
	  { key: 'interviewer_name', },
	  "date_joined",
	  "country",
	  "last_active",
	  "no_of_interview",

	
	]
  
	
  
	return (
	  <div className="card">
		  <div className="card-body">
		  <CDataTable
	  border
		items={usersData}
		fields={fields}
		tableFilter
		itemsPerPageSelect
		itemsPerPage={5}
		hover
		sorter
		pagination
		scopedSlots = {{
		  'link':
			()=>(
			  <td>
				<button className="btn btn-link" color="info" >
				  view 
				</button>
			  </td>
			),
		  'int_id':
			(item, index)=>(<td>
				<div className="text-center">
				{item.int_id}
				</div>
			  </td>
			),
		
		  'Results':
			(item, index)=>(<td>
				<button className="btn btn-light">
					View
				</button>
			  </td>
			),
				
		}}
	  />
		  </div>
	  </div>
	)
}
