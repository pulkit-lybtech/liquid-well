
import { CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow } from '@coreui/react'
import React from 'react'

export default function AddFaq() {

	 const [tag, setTag] = React.useState([])

	 const handleTag = (e) => {
		setTag()
	 }
	return (
		<div>
			<CRow>
				<CCol lg="6">
					<CCard>
						<CCardHeader className="h4 card-title ">
							Frequently Asked Questions 
						</CCardHeader>
						<CCardBody>
							<label htmlFor="#" className="form-group  w-100 mb-3">
								Enter a Question:
								<input type="text" className="form-control" placeholder="" />
							</label>
							<label htmlFor="#" className="form-group w-100 mb-3">
								Category/Keywords:
								{
									tag.map((item)=> <span className="badge badge-light">item</span> )
								}
								<input type="text" onChange={handleTag} className="form-control" placeholder="" />
							</label>
							<label htmlFor="#" className="form-group w-100 mb-3">
								Answer:
								<textarea name="" id="" rows="4" className="form-control"></textarea>
							</label>
						</CCardBody>
						<CCardFooter>
								<div className="d-flex">
									<button className="btn px-5 btn-primary">
										Save 
									</button>
								</div>
						</CCardFooter>
					</CCard>
				</CCol>
			</CRow>
		</div>
	)
}
