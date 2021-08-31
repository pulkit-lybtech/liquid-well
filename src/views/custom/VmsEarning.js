import { CBadge, CButton, CCardBody, CCollapse, CDataTable } from '@coreui/react'
import React from 'react'

export default function VmsEarning() {
	
	const [details, setDetails] = React.useState([])
	// const [items, setItems] = useState(usersData)
  
	const usersData = [
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
		{id: 1, name: "John Doe A", int_id: 12, plan : "Silver ", earning: 1000, commision: 500, payment: ""},
	]
	
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
	  { key: 'name', },
	  { key: 'int_id', label: "Interviewer ID"},
	  'plan',
	  { key: 'earning', },
	  { key: 'commision', },
	  { key: 'payment', label: "Payment Reciept", sorter: false, },
	  {
		key: 'show_details',
		label: '',
		_style: { width: '10%' },
		sorter: false,
		filter: false
	  }
	]
  
	
  
	return (
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
		  'payment':
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
					{details.includes(index) ? 'Details -' : 'Details +'}
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
					  {item.username}
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
			},
				
		}}
	  />
	)
}
