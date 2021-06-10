import { CCard, CCardBody, CCol, CRow,CCardHeader,CBadge, CDataTable,CButton,CCollapse, CProgress } from '@coreui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Analyzer() {
	
	const usersData = [
		{text_id: 0, customer_name: 'John Doe', date_created: '2018/01/01',usage: '3 GB', words: 45, letters: 152, notified: 'no', plan: 'Plan A', accuracy: 15, details: ''},
		{text_id: 0, customer_name: 'John Doe', date_created: '2018/01/01',usage: '3 GB', words: 45, letters: 152, notified: 'no', plan: 'Plan A', accuracy: 55, details: ''},
		{text_id: 0, customer_name: 'John Doe', date_created: '2018/01/01',usage: '3 GB', words: 45, letters: 152, notified: 'pending', plan: 'Plan A', accuracy: 45, details: ''},
		{text_id: 0, customer_name: 'John Doe', date_created: '2018/01/01',usage: '3 GB', words: 45, letters: 152, notified: 'yes', plan: 'Plan A', accuracy: 55, details: ''},
		{text_id: 0, customer_name: 'John Doe', date_created: '2018/01/01',usage: '3 GB', words: 45, letters: 152, notified: 'no', plan: 'Plan A', accuracy: 23, details: ''},
		{text_id: 0, customer_name: 'John Doe', date_created: '2018/01/01',usage: '3 GB', words: 45, letters: 152, notified: 'no', plan: 'Plan A', accuracy: 28, details: ''},
		{text_id: 0, customer_name: 'John Doe', date_created: '2018/01/01',usage: '3 GB', words: 45, letters: 152, notified: 'yes', plan: 'Plan A', accuracy: 55, details: ''},
		{text_id: 0, customer_name: 'John Doe', date_created: '2018/01/01',usage: '3 GB', words: 45, letters: 152, notified: 'no', plan: 'Plan A', accuracy: 55, details: ''},
		{text_id: 0, customer_name: 'John Doe', date_created: '2018/01/01',usage: '3 GB', words: 45, letters: 152, notified: 'no', plan: 'Plan A', accuracy: 12, details: ''},
		{text_id: 0, customer_name: 'John Doe', date_created: '2018/01/01',usage: '3 GB', words: 45, letters: 152, notified: 'yes', plan: 'Plan A', accuracy: 55, details: ''},
		{text_id: 0, customer_name: 'John Doe', date_created: '2018/01/01',usage: '3 GB', words: 45, letters: 152, notified: 'no', plan: 'Plan A', accuracy: 55, details: ''},
		{text_id: 0, customer_name: 'John Doe', date_created: '2018/01/01',usage: '3 GB', words: 45, letters: 152, notified: 'no', plan: 'Plan A', accuracy: 69, details: ''},
		{text_id: 0, customer_name: 'John Doe', date_created: '2018/01/01',usage: '3 GB', words: 45, letters: 152, notified: 'yes', plan: 'Plan A', accuracy: 55, details: ''},
		{text_id: 0, customer_name: 'John Doe', date_created: '2018/01/01',usage: '3 GB', words: 45, letters: 152, notified: 'no', plan: 'Plan A', accuracy: 55, details: ''},
		{text_id: 0, customer_name: 'John Doe', date_created: '2018/01/01',usage: '3 GB', words: 45, letters: 152, notified: 'yes', plan: 'Plan A', accuracy: 15, details: ''},
		
	  ]
	
	  const [details, setDetails] = React.useState([])
	  // const [items, setItems] = useState(usersData)
	
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
		{ key: 'text_id', },
		'customer_name',
		{ key: 'date_created' , label: 'Created on'},
		{ key: 'usage' },
		{ key: 'letters',  sorter: false,},
		{ key: 'words' , sorter: false,},
		{ key: 'notified' },
		{ key: 'plan' },
		{ key: 'accuracy' },
		{
		  key: 'show_details',
		  label: '',
		  _style: { width: '1%' },
		  sorter: false,
		  filter: false
		}
	  ]
	
	  const getBadge = (status)=>{
		switch (status) {
		  case 'no': return 'danger'
		  case 'yes': return 'success'
		  case 'pending': return 'warning'
		  default: return 'primary'
		}
	  }
	

	  ///  methods 

	  
	return (
		<>
			<CRow>
				<CCol>
					<CCard>
						<CCardHeader className=" d-flex align-items-center  justify-content-between ">
							<h4 className="mb-0 card-title ">
								Text Analyzer
							</h4>
						</CCardHeader>
						<CCardBody>


						<CDataTable
							items={usersData}
							fields={fields}
							tableFilter
							
							itemsPerPageSelect
							itemsPerPage={10}
							hover
							sorter
							pagination
							scopedSlots = {{
								'notified':
									(item)=>(
										<td>
										<CBadge className="text-capitalize " size="lg" color={getBadge(item.notified)}>
											{item.notified}
										</CBadge>
										</td>
								),
								'show_details':
								(item, index)=>{
									return (
									<td className="py-2">
										<CButton
										color="primary"
										variant="outline"
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
										<CRow lg="6">
												<CCol>
												<h4 className="mb-3 h5 d-flex justify-content-between">
												<div className="">
												Text ID:  
												<span className="ml-2">{item.text_id}</span>
												</div>

												<div className="">
												Customer Name: 
													<span className="ml-2">{item.customer_name}</span>
												</div>
												<div className="">
												Usage: 
													<span className="badge badge-lg badge-warning">{item.usage}</span>
												</div>

											</h4>
											<p className="text-muted">User since: {item.date_created}</p>
											</CCol>
											<CCol lg="6">
													<textarea placeholder="Edit text content" rows="3" className="form-control mb-2"></textarea>
												<CButton size="sm" color="info">
													Save Update
												</CButton>
												<CButton size="sm" color="danger" className="ml-1">
													Delete
												</CButton>
											</CCol>
										</CRow>
										
										</CCardBody>
									</CCollapse>
									)
								},
								'accuracy':
									(item)=>{
										return(
											<td className="pt-3">
												<CProgress size="xs" color="success" value={item.accuracy} />
											</td>
										)
									}
							}}
							/>
						</CCardBody>
					</CCard>
				</CCol>
			</CRow>
		</>
	)
}
