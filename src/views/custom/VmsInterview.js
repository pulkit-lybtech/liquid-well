import { CBadge, CButton, CCardBody, CCollapse, CDataTable } from '@coreui/react'
import React from 'react'

export default function VmsInterview() {
	
	const [details, setDetails] = React.useState([])
	// const [items, setItems] = useState(usersData)
  
	const usersData = [
		{id: 1, name: "Candid name", can_id: 12,schedule_on: "22/12/2019",schedule_for: "28/08/2021", category: "B1", interviewer_name: "Rajesh Kumar ", int_id: 21, Results: "", status: "9 days", link: "" },
		{id: 1, name: "Candid name", can_id: 12,schedule_on: "22/12/2019",schedule_for: "28/08/2021", category: "B1", interviewer_name: "Rajesh Kumar ", int_id: 21, Results: "", status: "9 days", link: "" },
		{id: 1, name: "Candid name", can_id: 12,schedule_on: "22/12/2019",schedule_for: "28/08/2021", category: "B1", interviewer_name: "Rajesh Kumar ", int_id: 21, Results: "", status: "9 days", link: "" },
		{id: 1, name: "Candid name", can_id: 12,schedule_on: "22/12/2019",schedule_for: "28/08/2021", category: "B1", interviewer_name: "Rajesh Kumar ", int_id: 21, Results: "", status: "9 days", link: "" },
		{id: 1, name: "Candid name", can_id: 12,schedule_on: "22/12/2019",schedule_for: "28/08/2021", category: "B1", interviewer_name: "Rajesh Kumar ", int_id: 21, Results: "", status: "9 days", link: "" },
		{id: 1, name: "Candid name", can_id: 12,schedule_on: "22/12/2019",schedule_for: "28/08/2021", category: "B1", interviewer_name: "Rajesh Kumar ", int_id: 21, Results: "", status: "9 days", link: "" },
		{id: 1, name: "Candid name", can_id: 12,schedule_on: "22/12/2019",schedule_for: "28/08/2021", category: "B1", interviewer_name: "Rajesh Kumar ", int_id: 21, Results: "", status: "9 days", link: "" },
		{id: 1, name: "Candid name", can_id: 12,schedule_on: "22/12/2019",schedule_for: "28/08/2021", category: "B1", interviewer_name: "Rajesh Kumar ", int_id: 21, Results: "", status: "9 days", link: "" },
		{id: 1, name: "Candid name", can_id: 12,schedule_on: "22/12/2019",schedule_for: "28/08/2021", category: "B1", interviewer_name: "Rajesh Kumar ", int_id: 21, Results: "", status: "9 days", link: "" },
		{id: 1, name: "Candid name", can_id: 12,schedule_on: "22/12/2019",schedule_for: "28/08/2021", category: "B1", interviewer_name: "Rajesh Kumar ", int_id: 21, Results: "", status: "9 days", link: "" },
		{id: 1, name: "Candid name", can_id: 12,schedule_on: "22/12/2019",schedule_for: "28/08/2021", category: "B1", interviewer_name: "Rajesh Kumar ", int_id: 21, Results: "", status: "9 days", link: "" },
		]
  
  
	const fields = [
		'id',
	  { key: 'name', },
	  "can_id",
	  { key: 'schedule_on', label: "Scheduled On", sorter: false, },
	  { key: 'schedule_for', label: "Scheduled For", sorter: false, },
	  "category",
	  "interviewer_name",
	  { key: 'int_id', label: "Interviewer ID"},
	  'Results',
	  { key: 'status', },
	  { key: 'link', label: "Interview Link"},

	
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
