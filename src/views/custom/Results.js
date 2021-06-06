import { 
	CDataTable,
	CButton,
	CProgress,
	CBadge,
	  } from '@coreui/react'
import CIcon from "@coreui/icons"
import React from 'react'
import { Link } from 'react-router-dom'

export default function AllQuest() {


	const resultData = [
		{id: 0, customer_name: 'Rajat Kumar ', date_created: '27/12/2021',usage: '2',plan: "Plan A",videolink: "", accuracy: '50', level: 'beginner', result: 'Passed',emailed: 'yes', notified: 'true'},
		{id: 0, customer_name: 'Rajat Kumar ', date_created: '27/12/2021',usage: '2',plan: "Plan A",videolink: "", accuracy: '20', level: 'advance', result: 'Passed',emailed: 'yes', notified: 'false'},
		{id: 0, customer_name: 'Rajat Kumar ', date_created: '27/12/2021',usage: '2',plan: "Plan A",videolink: "", accuracy: '40', level: 'beginner', result: 'Passed',emailed: 'no', notified: 'true'},
		{id: 0, customer_name: 'Rajat Gupta A ', date_created: '27/12/2021',usage: '2',plan: "Plan A",videolink: "", accuracy: '50', level: 'beginner', result: 'Passed',emailed: 'yes', notified: 'false'},
		{id: 0, customer_name: 'Rajat Kumar ', date_created: '27/12/2021',usage: '2',plan: "Plan A",videolink: "", accuracy: '30', level: 'beginner', result: 'Passed',emailed: 'yes', notified: 'true'},
		{id: 0, customer_name: 'Rajat Kumar ', date_created: '27/12/2021',usage: '3',plan: "Plan A",videolink: "", accuracy: '20', level: 'medium', result: 'Passed',emailed: 'no', notified: 'true'},
		{id: 0, customer_name: 'Anumata Kumar ', date_created: '27/12/2021',usage: '2',plan: "Plan A",videolink: "", accuracy: '50', level: 'beginner', result: 'Failed',emailed: 'yes', notified: 'true'},
		{id: 0, customer_name: 'Rajat Kumar ', date_created: '27/12/2021',usage: '2',plan: "Plan A",videolink: "", accuracy: '40', level: 'pro', result: 'Passed',emailed: 'yes', notified: 'false'},
		{id: 0, customer_name: 'Jai Shankar Kumar ', date_created: '27/12/2021',usage: '2',plan: "Plan A",videolink: "", accuracy: '90', level: 'beginner', result: 'Passed',emailed: 'yes', notified: 'true'},
		{id: 0, customer_name: 'Rajat Kumar ', date_created: '27/12/2021',usage: '2',plan: "Plan A",videolink: "", accuracy: '50', level: 'beginner', result: 'Passed',emailed: 'yes', notified: 'true'},
		{id: 0, customer_name: 'Rajat Kumar ', date_created: '27/12/2021',usage: '2',plan: "Plan A",videolink: "", accuracy: '10', level: 'beginner', result: 'Passed',emailed: 'yes', notified: 'false'},
		{id: 0, customer_name: 'Rajat Kumar ', date_created: '27/12/2021',usage: '2',plan: "Plan A",videolink: "", accuracy: '60', level: 'pro', result: 'Passed',emailed: 'no', notified: 'true'},
		
	  ]


	  const getBadge = (result)=>{
		switch (result) {
		  case 'Passed': return 'success'
		  case 'Failed': return 'danger'
		  default: return 'warning'
		}
	  }

	const fields = [
		{key: 'id'},
		{ key: 'customer_name', },
		'date_created',
		{key:'usage', },
		'plan',
		'level',
		{key: 'result'},
		{key: 'notified',filter: false },
		{key: 'emailed',},
		{ key: 'accuracy'  },
		{key: 'videolink',filter: false , _style: {width: "50px"}, sorter: false},
	  ]

	  
	return (
		<div className="card px-3">
			<div className="card-header d-flex justify-content-between ">
				<h4 className="mb-0 card-title">All Questions </h4> 
				<Link className="btn btn-info " to="/add-quest">Add New</Link>
			</div>
			<CDataTable
			items={resultData}
			fields={fields}
			tableFilter
			itemsPerPageSelect
			itemsPerPage={5}
			hover
			sorter
			pagination
			scopedSlots = {{
				'result':
				  (item)=>(
					<td>
					  <CBadge color={getBadge(item.result)}>
						{item.result}
					  </CBadge>
					</td>
				  ),
				'accuracy':
				  (item)=>(
					<td className="bg-light text-center ">
						<small className="text-dark ">{item.accuracy}%</small>
						<CProgress size="xs" color="success" value={item.accuracy} className="mb-1 bg-white" />
					</td>
				  ),
				'notified':
				  (item)=>(
					<td className={ item.notified ? ' text-success' : 'bg-warning  text-dark'}>
						{item.notified}
					</td>
				  ),
				'videolink':
				  (item)=>(
					<td className="bg-light">
						<CButton variant="outline" color="dark">
							Show 
						</CButton>
					</td>
				  ),
				// 'show_details':
				//   (item, index)=>{
				// 	return (
				// 	  <td className="py-2">
				// 		<CButton
				// 		  color="primary"
				// 		  variant="outline"
				// 		  shape="square"
				// 		  size="sm"
				// 		  onClick={()=>{toggleDetails(index)}}
				// 		>
				// 		  {details.includes(index) ? 'Hide' : 'Show'}
				// 		</CButton>
				// 	  </td>
				// 	  )
				//   },
				
			  }}
			/>
		
		</div>
	)
}
