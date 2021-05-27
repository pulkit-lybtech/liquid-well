import { CCard, CCardBody, CCol, CRow,CCardHeader, CDataTable,CButton,CCollapse } from '@coreui/react'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Faq() {
	const faqs = [
		{id: 0, faq_name: 'lorem ipsum d orem ipsum d	olar sit amet?', created_on: '2018/01/01', modified_on: '2018/01/01',
		text: 'rem, pura, sit, amet', video: '', likes: 152, dislikes: 36, details: ''},
		{id: 0, faq_name: 'lorem ipsum d orem ipsum d	olar sit amet?', created_on: '2018/01/01', modified_on: '2018/01/01',
		text: 'rem, pura, sit, amet', video: '', likes: 152, dislikes: 36, details: ''},
		{id: 0, faq_name: 'lorem ipsum d orem ipsum d	olar sit amet?', created_on: '2018/01/01', modified_on: '2018/01/01',
		text: 'rem, pura, sit, amet', video: '', likes: 152, dislikes: 36, details: ''},
		{id: 0, faq_name: 'lorem ipsum dolar sit amet?', created_on: '2018/01/01', modified_on: '2018/01/01',
		text: 'rem, pura, sit, amet', video: '', likes: 152, dislikes: 36, details: ''},
		{id: 0, faq_name: 'lorem ipsum dolar sit amet?', created_on: '2018/01/01', modified_on: '2018/01/01',
		text: 'rem, pura, sit, amet', video: '', likes: 152, dislikes: 36, details: ''},
		{id: 0, faq_name: 'lorem ipsum dolar sit amet?', created_on: '2018/01/01', modified_on: '2018/01/01',
		text: 'rem, pura, sit, amet', video: '', likes: 152, dislikes: 36, details: ''},
		{id: 0, faq_name: 'lorem ipsum dolar sit amet?', created_on: '2018/01/01', modified_on: '2018/01/01',
		text: 'rem, pura, sit, amet', video: '', likes: 152, dislikes: 36, details: ''},
		{id: 0, faq_name: 'lorem ipsum dolar sit amet?', created_on: '2018/01/01', modified_on: '2018/01/01',
		text: 'rem, pura, sit, amet', video: '', likes: 152, dislikes: 36, details: ''},
		{id: 0, faq_name: 'lorem ipsum dolar sit amet?', created_on: '2018/01/01', modified_on: '2018/01/01',
		text: 'rem, pura, sit, amet', video: '', likes: 152, dislikes: 36, details: ''},
		{id: 0, faq_name: 'lorem ipsum dolar sit amet?', created_on: '2018/01/01', modified_on: '2018/01/01',
		text: 'rem, pura, sit, amet', video: '', likes: 152, dislikes: 36, details: ''},
		{id: 0, faq_name: ' lorem ipsum dolar sit amet? lorem ipsum dolar sit amet? lorem ipsum dolar sit amet?', created_on: '2018/01/01', modified_on: '2018/01/01',
		text: 'rem, pura, sit, amet', video: '', likes: 152, dislikes: 36, details: ''},

		
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
		{ key: 'id', },
		{ key: 'faq_name', _style:{maxWidth: "150px"}},
		{ key: 'Keywords'},
		{ key: 'created_on' },
		{ key: 'modified_on',},
		{ key: 'text', sorter: false, className: 'text-danger'},
		{ key: 'video' },
		{ key: 'likes' },
		{ key: 'dislikes' },
		{
		  key: 'show_details',
		  label: '',
		  _style: { width: '1%' },
		  sorter: false,
		  filter: false
		}
	  ]
	
	 
	  
	return (
		<>
			<CRow>
				<CCol>
					<CCard>
						<CCardHeader className=" d-flex align-items-center  justify-content-between ">
							<h4 className="mb-0 card-title ">
								Frequently Asked Questions 
							</h4>
							<Link className="btn btn-info " to="/add-faq ">Add New</Link>
						</CCardHeader>
						<CCardBody>


						<CDataTable
							items={faqs}
							fields={fields}
							tableFilter
							itemsPerPageSelect
							itemsPerPage={10}
							sorter
							pagination
							scopedSlots = {{
								
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
										<CRow>
											<CCol lg="8">
												<input type="text" className="form-control mb-3" placeholder={item.faq_name} />
												<input type="text" className="form-control mb-3" placeholder={item.text} />
												<textarea placeholder="Edit FAQ" rows="3" className="form-control mb-2">
													{item.answer}
												</textarea>
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
								'faq_name': 
								 	item => {
										 return(
											<td style={{maxWidth: "180px"}} className="text-truncate">  {item.faq_name} </td>
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
