import CIcon from '@coreui/icons-react'
import { CBadge, CButton, CCard, CCardBody, CDataTable, CCollapse, CButtonGroup, CCardHeader, CRow, CCol, CCardFooter, CCallout } from '@coreui/react'
import React from 'react'

export default function CustomerManager() {

	const leads = [
		{id: 1, name: "Arpit Ipshat", created_on: "21/12/2018", type: "A", email: "arpitg98@gmail.com", plan: "PLan A", usage: "2", verfied: false, source: "unknw wip"},
		{id: 1, name: "Arpit Adkhar", created_on: "21/12/2018", type: "A", email: "arpitg98@gmail.com", plan: "PLan A", usage: "2", verfied: false, source: "unknw wip"},
		{id: 1, name: "Arpit Ipshat", created_on: "21/12/2018", type: "A", email: "arpitg98@gmail.com", plan: "PLan A", usage: "2", verfied: true, source: "unknw wip"},
		{id: 1, name: "Kumar Ipshat", created_on: "21/12/2018", type: "B", email: "arpitg98@gmail.com", plan: "PLan A", usage: "2", verfied: false, source: "unknw wip"},
		{id: 1, name: "Arpit Ipshat", created_on: "21/12/2018", type: "A", email: "arpitg98@gmail.com", plan: "PLan A", usage: "2", verfied: true, source: "unknw wip"},
		{id: 1, name: "Arpit Ipshat", created_on: "21/12/2018", type: "A", email: "richiehac@gmail.com", plan: "PLan A", usage: "2", verfied: true, source: "unknw wip"},
		{id: 1, name: "Rajan Ipshat", created_on: "21/12/2018", type: "A", email: "arpitg98@gmail.com", plan: "PLan A", usage: "2", verfied: false, source: "unknw wip"},
		{id: 1, name: "Arpit Ipshat", created_on: "21/12/2018", type: "A", email: "arpitg98@gmail.com", plan: "PLan A", usage: "2", verfied: true, source: "unknw wip"},
		{id: 1, name: "Arpit Ipshat", created_on: "21/12/2018", type: "D", email: "arpitg98@gmail.com", plan: "PLan A", usage: "2", verfied: true, source: "unknw wip"},
		{id: 1, name: "Arpit Ipshat", created_on: "21/12/2018", type: "A", email: "arpitg98@gmail.com", plan: "PLan A", usage: "2", verfied: false, source: "unknw wip"},
		{id: 1, name: "Arpit Ipshat", created_on: "21/12/2018", type: "A", email: "pulkitsingh@gmail.com", plan: "PLan A", usage: "2", verfied: true, source: "unknw wip"},
		{id: 1, name: "Arpit Ipshat", created_on: "21/12/2018", type: "A", email: "arpitg98@gmail.com", plan: "PLan A", usage: "2", verfied: false, source: "unknw wip"},
		{id: 1, name: "Arpit Ipshat", created_on: "21/12/2018", type: "C", email: "arpitg98@gmail.com", plan: "PLan A", usage: "2", verfied: true, source: "unknw wip"},
		{id: 1, name: "Arpit Ipshat", created_on: "21/12/2018", type: "A", email: "rajatgupta98@gmail.com", plan: "PLan A", usage: "2", verfied: false, source: "unknw wip"},
	]

	const [details, setDetails] = React.useState([])

	const fields = [
		'id',
		{key: 'name', label: "Lead Name"},
		{key: 'created_on', label: 'Created On'},
		{key: 'type', label: 'Type'},
		{key: 'phone', label: 'Phone', sorter: false,},
		{key: 'email', label: 'Email', sorter: false,},
		{key: 'plan', label: 'Plan', sorter: false,},
		{key: 'usage', sorter: true,	_style: { width: '10px' },},
		{key: 'verified',_style: { width: '10px' },},
		{key: 'source', sorter: false,},
		{
			key: 'show_details',
			label: '',
			_style: { width: '1%' },
			sorter: false,
			filter: false
		},
	
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

		const getBadge = (verified)=>{
			if (verified) {
			return 'success'
			}
			else{
				return 'warning'
			}
		  }
		

	return (
		<CCard>
			<CCardHeader>
				<div className="d-flex justify-content-between align-items-center ">
					<h4 className="card-title mb-0">Customer Management System </h4>
					<CButton  color="primary">
						Action 
					</CButton>
				</div>
			</CCardHeader>
			<CCardBody>
				<CDataTable 
				items={leads}
				fields={fields}
				pagination
				sorter
				border
				outlined
				itemsPerPageSelect
				itemsPerPage={10}
				size="sm"
				footer
				tableFilter
				hover
				scopedSlots = {{
					'verified':
					  (item)=>(
						<td>
						  <CBadge color={getBadge(item.verfied)}>
							{item.verfied ? 'Yes' : "No"  }
						  </CBadge>
						</td>
					  ),
					'show_details':
					  (item, index)=>{
						return (
						  <td className="py-2">
							<CButtonGroup>
								<CButton
								color="dark"
								variant="outline"
								shape="square"
								size="sm"	
								onClick={()=>{toggleDetails(index)}}
								>
								{details.includes(index) ? 'Hide' : 'Show'}
								</CButton>
								<CButton   
									color="dark"
									variant="outline"
									shape="square"
									size="sm">
											<CIcon size={'sm'} name={'cilTrash'} />
								</CButton>
							</CButtonGroup>
						  </td>
						  )
					  },
					'usage':
						(item, index)=>{
						  return (
						  <td>
							  {item.usage} GB 
						  </td>
						)
					  },
					'details':
						(item, index)=>{
						  return (
						  <CCollapse show={details.includes(index)}>
							<CCardBody>
							  	<CRow>
									<CCol md="4" lg="3">	
										<label htmlFor="#" className="form-group  w-100 mb-3">
											Name:
											<input type="text" className="form-control" placeholder="" />
										</label>
									</CCol>  
									<CCol md="4"  lg="3">
										<label htmlFor="#" className="form-group  w-100 mb-3">
											Plan:
											<input type="text" className="form-control" placeholder="" />
										</label>
									</CCol>  
									<CCol md="4"  lg="3">
										<label htmlFor="#" className="form-group  w-100 mb-3">
											No. of Dialgoues:
											<input type="text" className="form-control" placeholder="" />
										</label>
									</CCol>  
									<CCol md="4" lg="3">	
										<label htmlFor="#" className="form-group  w-100 mb-3">
											Email:
											<input type="text" className="form-control" placeholder="" />
										</label>
									</CCol>  
									<CCol md="4"  lg="3">
										<label htmlFor="#" className="form-group  w-100 mb-3">
											Phone:
											<input type="text" className="form-control" placeholder="" />
										</label>
									</CCol>  
									<CCol md="4"  lg="3">
										<label htmlFor="#" className="form-group  w-100 mb-3">
											No. of D. TOR's:
											<input type="text" className="form-control" placeholder="" />
										</label>
									</CCol>  
									<CCol md="4"  lg="3">
										<label htmlFor="#" className="form-group  w-100 mb-3">
											Customer Type :
											<input type="text" className="form-control" placeholder="" />
										</label>
									</CCol>  
									<CCol md="4"  lg="3">
										<label htmlFor="#" className="form-group  w-100 mb-3">
											Billing Cycle 
											<input type="text" className="form-control" placeholder="" />
										</label>
									</CCol>  
									<CCol md="3" sm="6" lg="3">
										<CButton color="primary" block>
											Update 
										</CButton>
									</CCol>  
								</CRow> 
							</CCardBody>
						  </CCollapse>
						)
					  }
				  }}
				/>
			</CCardBody>
			<CCardFooter className="bg-light 	">
				<div className="row">
					<div className="col-lg-3">
						<CCallout color="warning" className="bg-white">
							<small className="text-muted">New Clients</small><br />
             				<strong className="h4 text-dark">9,123</strong>
						</CCallout>
					</div>
					<div className="col-lg-3">
						<CCallout color="danger" className="bg-white">
							<small className="text-muted">New Leads</small><br />
             				<strong className="h4 text-dark">46623</strong>
						</CCallout>
					</div>
					<div className="col-lg-3">
						<CCallout color="success" className="bg-white">
							<small className="text-muted">Total Leads </small><br />
             				<strong className="h4 text-dark">13</strong>
						</CCallout>
					</div>
					<div className="col-lg-3">
						<CCallout color="info " className="bg-white">
							<small className="text-muted">New Users </small><br />
             				<strong className="h4 text-dark">1561</strong>
						</CCallout>
					</div>
				</div>
			</CCardFooter>
		</CCard>
	)
}
