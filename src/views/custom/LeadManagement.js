import React from 'react'
import { CIcon } from "@coreui/icons-react"
import { CCard,CRow,CCallout, CCardBody, CCardHeader,CButton,CCollapse, CCol, CBadge,CButtonGroup,CDataTable  } from '@coreui/react'

export default function LeadManagement() {

	const leads = [
		{
			id:1,lead_name:"New Start",managed_by: "Rakesh Kumar", 
			stage: "pending",company: "XYZ Inc.",
			deal_value: "2323",probability: "60",
			contact: "9756126578", email:"rmakant@gmail.com", lead_age: "2 Days Ago",
			forecast_value: "32",closed_date: "23-12-2021",actual_value: "123", 
			location: "Delhi", plan_enq: "Plan A", 
			date_updated: "23-15-25",priority: "low",
			task: [],date_created: "12-12-2012", 
		},
		{
			id:1,lead_name:"Lorem Ipsum Start",managed_by: "Rakesh Kumar", 
			stage: "won",company: "XYZ Inc.",
			deal_value: "2323",probability: "60",
			contact: "9756126578", email:"rmakant@gmail.com", lead_age: "2 Days Ago",
			forecast_value: "32",closed_date: "23-12-2021",actual_value: "123", 
			location: "Delhi", plan_enq: "Plan A", 
			date_updated: "23-15-25",
			task: [],date_created: "12-12-2012", 
		},
		{
			id:1,lead_name:"New Raj Inc",managed_by: "Rakesh Kumar", 
			stage: "pending",company: "XYZ Inc.",
			deal_value: "2323",probability: "60",
			contact: "9756126578", email:"rmakant@gmail.com", lead_age: "2 Days Ago",
			forecast_value: "32",closed_date: "23-12-2021",actual_value: "123", 
			location: "Delhi", plan_enq: "Plan A", 
			date_updated: "23-15-25",priority: "high",
			task: [],date_created: "12-12-2012", 
		},
		{
			id:1,lead_name:"New Start",managed_by: "Rakesh Kumar", 
			stage: "lost",company: "XYZ Inc.",
			deal_value: "2323",probability: "60",
			contact: "9756126578", email:"rmakant@gmail.com", lead_age: "2 Days Ago",
			forecast_value: "32",closed_date: "23-12-2021",actual_value: "123", 
			location: "Delhi", plan_enq: "Plan A", 
			date_updated: "23-15-25",
			task: [],date_created: "12-12-2012", 
		},
		{
			id:1,lead_name:"Lorem Ipsum Start",managed_by: "Rakesh Kumar", 
			stage: "won",company: "XYZ Inc.",
			deal_value: "2323",probability: "60",
			contact: "9756126578", email:"rmakant@gmail.com", lead_age: "2 Days Ago",
			forecast_value: "32",closed_date: "23-12-2021",actual_value: "123", 
			location: "Delhi", plan_enq: "Plan B", 
			date_updated: "23-15-25",priority: "low",
			task: [],date_created: "12-12-2012", 
		},
		{
			id:1,lead_name:"New Raj Inc",managed_by: "Rakesh Kumar", 
			stage: "pending",company: "XYZ Inc.",
			deal_value: "2323",probability: "60",
			contact: "9756126578", email:"rmakant@gmail.com", lead_age: "2 Days Ago",
			forecast_value: "32",closed_date: "23-12-2021",actual_value: "123", 
			location: "Delhi", plan_enq: "Plan A", 
			date_updated: "23-15-25",priority: "medium",
			task: [],date_created: "12-12-2012", 
		},
		{
			id:1,lead_name:"New Start",managed_by: "Rakesh Kumar", 
			stage: "lost",company: "XYZ Inc.",
			deal_value: "2323",probability: "60",
			contact: "9756126578", email:"rmakant@gmail.com", lead_age: "2 Days Ago",
			forecast_value: "32",closed_date: "23-12-2021",actual_value: "123", 
			location: "Delhi", plan_enq: "Plan B", 
			date_updated: "23-15-25",
			task: [],date_created: "12-12-2012", 
		},
		{
			id:1,lead_name:"Lorem Ipsum Start",managed_by: "Rakesh Kumar", 
			stage: "won",company: "XYZ Inc.",
			deal_value: "2323",probability: "60",
			contact: "9756126578", email:"rmakant@gmail.com", lead_age: "2 Days Ago",
			forecast_value: "32",closed_date: "23-12-2021",actual_value: "123", 
			location: "Delhi", plan_enq: "Plan A", 
			date_updated: "23-15-25",
			task: [],date_created: "12-12-2012", priority: "medium"
		},
		{
			id:1,lead_name:"New Raj Inc",managed_by: "Rakesh Kumar", 
			stage: "pending",company: "XYZ Inc.",
			deal_value: "2323",probability: "60",
			contact: "9756126578", email:"rmakant@gmail.com", lead_age: "2 Days Ago",
			forecast_value: "32",closed_date: "23-12-2021",actual_value: "123", 
			location: "Delhi", plan_enq: "Plan A", 
			date_updated: "23-15-25",
			task: [],date_created: "12-12-2012", priority: "medium"
		},
		{
			id:1,lead_name:"New Start",managed_by: "Rakesh Kumar", 
			stage: "lost",company: "XYZ Inc.",
			deal_value: "2323",probability: "60",
			contact: "9756126578", email:"rmakant@gmail.com", lead_age: "2 Days Ago",
			forecast_value: "32",closed_date: "23-12-2021",actual_value: "123", 
			location: "Delhi", plan_enq: "Plan B", 
			task: [],
		},
		{
			id:1,lead_name:"Lorem Ipsum Start",managed_by: "Rakesh Kumar", 
			stage: "won",company: "XYZ Inc.",
			deal_value: "2323",probability: "60",
			contact: "9756126578", email:"rmakant@gmail.com", lead_age: "2 Days Ago",
			forecast_value: "32",closed_date: "23-12-2021",actual_value: "123", 
			location: "Delhi", plan_enq: "Plan A", 
			task: [],
		},
		{
			id:1,lead_name:"New Raj Inc",managed_by: "Rakesh Kumar", 
			stage: "pending",company: "XYZ Inc.",
			deal_value: "2323",probability: "60",
			contact: "9756126578", email:"rmakant@gmail.com", lead_age: "2 Days Ago",
			forecast_value: "32",closed_date: "23-12-2021",actual_value: "123", 
			location: "Delhi", plan_enq: "Plan A", 
			task: [],priority: "high"
		},
		{
			id:1,lead_name:"New Start",managed_by: "Rakesh Kumar", 
			stage: "lost",company: "XYZ Inc.",
			deal_value: "2323",probability: "60",
			contact: "9756126578", email:"rmakant@gmail.com", lead_age: "2 Days Ago",
			forecast_value: "32",closed_date: "23-12-2021",actual_value: "123", 
			location: "Delhi", plan_enq: "Plan B", date_updated: "23-15-25",
			task: [],date_created: "12-12-2012", priority: "low"
		}
	]

	// states 
	const [details, setDetails] = React.useState([])

	const fields = [
		{key: 'id', label: "#"},
		{key: 'lead_name'},
		{key: 'managed_by'},
		{key: 'stage'},
		{key: 'priority'},
		{key: 'company'},
		// {key: 'lead_age'},
		{key: 'deal_value'},
		// {key: 'forecast_value'},
		{key: 'probability',  sorter: false,_style: { width: '10px' }},
			// {key: 'closed_date', label: "Exp Close Date",_style: { width: '10px' },},
		// {key: 'actual_value', label: "Actual Deal Value",_style: { width: '10px' },},
		{key: 'phone', label: 'Contact', sorter: false,},
		{key: 'location', sorter: false,},
		{key: 'plan_enq', },
		// {key: 'task', sorter: false,},
		// {key: 'date_created', sorter: true,},
		// {key: 'date_updated', sorter: true,},

		// {key: 'email', label: 'Email', sorter: false,},
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

	const getBadge = (stage)=>{
		switch (stage) {
			case 'won': return 'success'
			// case 'inactive': return 'secondary'
			case 'pending': return 'warning'
			case 'lost': return 'danger'
			default: return 'secondary'
		  }
	  }
	const getClass = (priority)=>{
		switch (priority) {
			case 'low': return 'bg-success px-1 small'
			// case 'inactive': return 'secondary'
			case 'medium': return 'bg-warning text-dark  px-1 small'
			case 'high': return 'bg-danger px-1 small'
			default: return 'bg-secondary px-1 small'
		  }
	  }
	



	return (
		<CCard>
			<CCardHeader>
				<div className="d-flex justify-content-between align-items-center ">
					<h4 className="card-title mb-0">Lead Management System </h4>
					<CButton  color="primary">
						Action 
					</CButton>
				</div>
				<div className="row">
					<div className="col-lg-3">
						<CCallout color="warning" className="bg-white">
							<small className="text-muted">New Leads</small><br />
             				<strong className="h4 text-dark">9,123</strong>
						</CCallout>
					</div>
					<div className="col-lg-3">
						<CCallout color="success" className="bg-white">
							<small className="text-muted">Won Leads</small><br />
             				<strong className="h4 text-dark">46623</strong>
						</CCallout>
					</div>
					<div className="col-lg-3">
						<CCallout color="warning" className="bg-white">
							<small className="text-muted">Pending Leads </small><br />
             				<strong className="h4 text-dark">13</strong>
						</CCallout>
					</div>
					<div className="col-lg-3">
						<CCallout color="info" className="bg-white">
							<small className="text-muted">Lost  Users </small><br />
             				<strong className="h4 text-dark">1561</strong>
						</CCallout>
					</div>
				</div>
			</CCardHeader>
			<CCardBody>
			<CDataTable 
				items={leads}
				fields={fields}
				pagination
				sorter
				border
				itemsPerPageSelect
				itemsPerPage={10}
				size="sm"
				footer
				tableFilter
				hover
				scopedSlots = {{
					'stage':
					  (item)=>(
						<td>
						  <CBadge color={getBadge(item.stage)}>
							{item.stage }
						  </CBadge>
						</td>
					  ),
					'priority':
					  (item)=>(
						<td>
						  <p size="lg" className={getClass(item.priority)}>
							{item.priority }
						  </p>
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
					'phone':
						(item, index)=>{
						  return (
						  <td>
							  <p className="mb-0">{item.contact}	</p>
							  <a className="small " href={`mailto:${item.email}`}>{item.email}</a>
						  </td>
						)
					  },
					'probability':
						(item, index)=>{
						  return (
						  <td>
							  <p className="mb-0 text-right">{item.probability}	</p>
							  <small className="d-block text-right">  Forecast: {item.forecast_value}</small>
						  </td>
						)
					  },
					'lead_name':
						(item, index)=>{
						  return (
						  <td>
							  <p className="mb-0 text-left text-dark ">{item.lead_name}	</p>
							  {item.date_created && <small className="d-block"> Created On: {item.date_created }</small>}
							  {item.date_updated && <small className="d-block"> Updated On: {item.date_created }</small>}
						  </td>
						)
					  },
					'deal_value':
						(item, index)=>{
						  return (
						  <td className=" text-right">
							  <strong className="mb-0 text-right text-dark ">{item.deal_value}	</strong>
							  {item.actual_value && <span className="small px-2 text-right bg-light d-block"> Actual: {item.actual_value }</span>}
							  {/* {item.forecast_value && <span className="small p-2 text-right w-100">  Forecast: {item.forecast_value }</span>} */}
						  </td>
						)
					  },
					'details':
						(item, index)=>{
						  return (
						  <CCollapse show={details.includes(index)}>
							<CCardBody>
							  	<CRow>
									<CCol md="4" lg="4">	
										<label htmlFor="#" className="form-group  w-100 mb-3">
											Add Task:
											<input type="text" className="form-control" placeholder="" />
										</label>
										<label htmlFor="#" className="form-group  w-100 mb-3">
											Add Comment:
											<input type="text" className="form-control" placeholder="" />
										</label>
										<div className="row">
											<div className="col-md-6">
											<label htmlFor="#" className="form-group  w-100 mb-3">
											Managed By  :
											<select name="" id="" className="custom-select">
												<option value="#">Animesh</option>
												<option value="#">Rajesh</option>
												<option value="#">Rajat</option>
												<option value="#">Rajan</option>
											</select>
										</label>
									
											</div>
											<div className="col-md-6">
											<label htmlFor="#" className="form-group  w-100 mb-3">
											Stage  
											<select name="" id="" className="custom-select">
												<option value="#">pending</option>
												<option value="#">won</option>
												<option value="#">pending</option>
												<option value="#">awaited</option>
											</select>
										</label>	
											</div>
										</div>
										<CButton color="primary" block>
											Save and Update 
										</CButton>
									</CCol>  
									 
									
									 
									<CCol  lg="4">
										<strong>Tasks</strong>
										<ul className="list-group">
											<li className="list-group-item">
												Lome porem Isum Task
											</li>
											<li className="list-group-item">
												Lome porem Isum Task
											</li>
											<li className="list-group-item">
												Lome porem Isum Task
											</li>
											<li className="list-group-item">
												Lome porem Isum Task
											</li>
										</ul>
										
									</CCol>  
									<CCol  lg="4">
										<strong>Comments</strong>
										<ul className="list-group list-group-sm">
											<li className="list-group-item">
												Lome porem Isum Comment s
											</li>
											<li className="list-group-item">
												Lome porem Isum Comment s
											</li>
											<li className="list-group-item">
												Lome porem Isum Comment s
											</li>
											<li className="list-group-item">
												Lome porem Isum Comment s
											</li>
										</ul>
										
									</CCol>  
								</CRow> 
							</CCardBody>
						  </CCollapse>
						)
					  }
				  }}
				/>
			</CCardBody>
		</CCard>
	)
}
