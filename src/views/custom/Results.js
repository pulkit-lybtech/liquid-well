import { 
	CDataTable,
	CButton,
	CButtonClose  } from '@coreui/react'
import {
	COffcanvas,
	COffcanvasBody,
	COffcanvasHeader,
	COffcanvasTitle,} from '@coreui/utils'
import React from 'react'
import { Link } from 'react-router-dom'

export default function AllQuest() {

	const [visible, setVisible] = React.useState(false)

	const resultData = [
		{id: 0, uploaded_dates: '22-05-2021', no_attempts: '5',accurate_attempts: '2', accuracy: '50%', level: 'beginner',plan: 'Plan A'},
		
	  ]


	const fields = [
		{key: 'id'},
		{ key: 'customer_name',_style:{width: "185px"} },
		'date_created',
		{key:'usage', },
		'plan',
		{key: 'videolink', sorter: false},
		{ key: 'accuracy'  },
		'level',
		{key: 'result',label: '',sorter: false},
		{key: 'notified',label: '',sorter: false,filter: false },
		{key: 'emailed',label: '',},
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
				'videolink':
				(item)=>(
					<td className={``}>
						<CButton onClick={() => setVisible(true)}>
							Show Video 
						</CButton>
						<COffcanvas
							placement="end"
							visible={visible}
							onDismiss={() => setVisible(false)}
						>
							<COffcanvasHeader>
							<COffcanvasTitle>Offcanvas</COffcanvasTitle>
							<CButtonClose
								className="text-reset"
								onClick={() => setVisible(false)}
							/>
							</COffcanvasHeader>
							<COffcanvasBody>
							<iframe width="956" height="538" src="https://www.youtube.com/embed/6stlCkUDG_s?list=PL4Gr5tOAPttLOY9IrWVjJlv4CtkYI5cI_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</COffcanvasBody>
						</COffcanvas>

					</td>
				),
				'emailed':
				(item)=>(
					<td className={`banner ${(item==='yes') ? "bg-success" : "bg-danger"}`}>
						{item}		
					</td>
				),
			}
		}
			/>
		
		</div>
	)
}
